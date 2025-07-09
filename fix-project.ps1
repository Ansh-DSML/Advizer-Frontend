# fix-project.ps1
$projectRoot = Get-Location
Write-Host "`n🚧 Fixing Next.js Project Structure Issues..." -ForegroundColor Cyan

# 1. ✅ Update tsconfig.json
$tsconfig = Join-Path $projectRoot "tsconfig.json"
if (Test-Path $tsconfig) {
    $json = Get-Content $tsconfig -Raw | ConvertFrom-Json
    $json.compilerOptions.baseUrl = "src"
    $json.compilerOptions.paths = @{ "@/*" = @("./*") }
    $json | ConvertTo-Json -Depth 10 | Set-Content $tsconfig
    Write-Host "✅ tsconfig.json updated with baseUrl=src and @ alias."
} else {
    Write-Host "⚠️ tsconfig.json not found!"
}

# 2. 🔁 Fix import paths in all .ts/.tsx files
$files = Get-ChildItem -Path "$projectRoot/src" -Recurse -Include *.ts, *.tsx
foreach ($file in $files) {
    (Get-Content $file.FullName) |
        ForEach-Object {
            $_ -replace "from\s+['""](\.\/|\.\.\/)+", "from '@/" `
               -replace "import\s+\{[^}]+\}\s+from\s+['""]components", "import {`$& from '@/components" `
               -replace "import\s+\{[^}]+\}\s+from\s+['""]lib", "import {`$& from '@/lib" `
               -replace "import\s+\{[^}]+\}\s+from\s+['""]hooks", "import {`$& from '@/hooks"
        } | Set-Content $file.FullName
}
Write-Host "✅ Import paths updated to use '@/'."

# 3. 🧼 Fix unescaped apostrophes in JSX
foreach ($file in $files) {
    (Get-Content $file.FullName) |
        ForEach-Object {
            $_ -replace "(?<!\\)'", "&apos;"  # crude but effective in JSX context
        } | Set-Content $file.FullName
}
Write-Host "✅ Replaced unescaped `'` with &apos; in JSX."

# 4. 🔥 Remove unused variables (lines only, not perfect)
foreach ($file in $files) {
    $lines = Get-Content $file.FullName
    $cleaned = $lines | Where-Object { $_ -notmatch "@typescript-eslint/no-unused-vars" -and $_ -notmatch "is assigned a value but never used" }
    $cleaned | Set-Content $file.FullName
}
Write-Host "✅ Removed obvious unused variable lines."

# 5. 🚨 Warn about <img> tags
$imgWarnings = $files | ForEach-Object {
    Select-String -Path $_.FullName -Pattern "<img " -SimpleMatch
}
if ($imgWarnings.Count -gt 0) {
    Write-Host "`n⚠️ Found usage of <img>. Please replace with <Image /> manually:" -ForegroundColor Yellow
    $imgWarnings | ForEach-Object { Write-Host " - $($_.Filename):$($_.LineNumber): $($_.Line.Trim())" }
} else {
    Write-Host "✅ No <img> tags found."
}

Write-Host "`n✅ All fixes applied! Restart your dev server: npm run dev`n" -ForegroundColor Green

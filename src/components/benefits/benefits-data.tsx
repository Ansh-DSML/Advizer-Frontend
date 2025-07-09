import type React from "react"
import { BarChart3, TrendingUp, PieChart, LineChart, Activity, Target } from "lucide-react"

export interface BenefitRole {
  id: string
  icon: string
  title: string
  benefits: string[]
  visualComponent: React.ReactNode
  interactivityLabel: string
  detailedBenefits: {
    title: string
    description: string
  }[]
  caseStudyTitle: string
  caseStudyDescription: string
  metrics: {
    label: string
    value: string
  }[]
}

export const benefitsData: BenefitRole[] = [
  {
    id: "cmo",
    icon: "👔",
    title: "CMOs & Marketing Directors",
    benefits: ["40% faster ad optimization", "25% reduction in campaign costs", "35% improvement in ROI"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <BarChart3 className="w-12 h-12 text-blue-400" />
      </div>
    ),
    interactivityLabel: "case studies",
    detailedBenefits: [
      {
        title: "Accelerated Decision Making",
        description:
          "Advizer's AI-powered analytics reduce the time from data collection to actionable insights by 40%, allowing marketing leaders to make faster, more informed decisions.",
      },
      {
        title: "Budget Optimization",
        description:
          "By identifying underperforming ad elements early, Advizer helps CMOs reallocate budgets more effectively, resulting in 25% lower campaign costs.",
      },
      {
        title: "Enhanced Performance Tracking",
        description:
          "Our comprehensive dashboard provides real-time visibility into campaign performance across all channels, improving overall marketing ROI by 35%.",
      },
    ],
    caseStudyTitle: "How Global Retail Brand Increased ROAS by 45%",
    caseStudyDescription:
      "A leading retail brand used Advizer to analyze their creative strategy across 12 markets, identifying key performance patterns that led to a 45% increase in return on ad spend within 3 months.",
    metrics: [
      { label: "Avg. Time Saved", value: "15 hours/week" },
      { label: "Campaign Cost Reduction", value: "25%" },
      { label: "ROI Improvement", value: "35%" },
      { label: "Decision Speed", value: "40% faster" },
    ],
  },
  {
    id: "agencies",
    icon: "🎨",
    title: "Advertising Agencies",
    benefits: ["50% faster client reporting", "30% more successful campaigns", "45% better client retention"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <TrendingUp className="w-12 h-12 text-green-400" />
      </div>
    ),
    interactivityLabel: "success metrics",
    detailedBenefits: [
      {
        title: "Streamlined Client Reporting",
        description:
          "Advizer automates the collection and visualization of campaign data, reducing reporting time by 50% and allowing agencies to focus on strategy.",
      },
      {
        title: "Improved Campaign Performance",
        description:
          "Our AI-powered recommendations help agencies create 30% more successful campaigns by identifying winning creative elements before launch.",
      },
      {
        title: "Enhanced Client Relationships",
        description:
          "With data-backed insights and transparent reporting, agencies using Advizer experience 45% better client retention rates.",
      },
    ],
    caseStudyTitle: "How Medium-Sized Agency Doubled Their Client Base",
    caseStudyDescription:
      "A digital marketing agency with 15 employees used Advizer to scale their operations, improve campaign results, and provide better insights to clients, resulting in doubling their client base within 12 months.",
    metrics: [
      { label: "Reporting Time Saved", value: "50%" },
      { label: "Campaign Success Rate", value: "+30%" },
      { label: "Client Retention", value: "+45%" },
      { label: "New Business Growth", value: "+60%" },
    ],
  },
  {
    id: "ecommerce",
    icon: "🛍️",
    title: "E-commerce Businesses",
    benefits: ["55% higher conversion rates", "40% better ad targeting", "60% faster market adaptation"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <PieChart className="w-12 h-12 text-orange-400" />
      </div>
    ),
    interactivityLabel: "industry benchmarks",
    detailedBenefits: [
      {
        title: "Conversion-Focused Creative Insights",
        description:
          "Advizer analyzes which visual elements drive purchases, helping e-commerce businesses increase conversion rates by 55% through optimized ad creative.",
      },
      {
        title: "Precision Audience Targeting",
        description:
          "Our platform identifies which creative elements resonate with specific audience segments, improving targeting effectiveness by 40%.",
      },
      {
        title: "Rapid Market Adaptation",
        description:
          "E-commerce trends change quickly. Advizer helps businesses adapt 60% faster by identifying emerging patterns in consumer response to different ad types.",
      },
    ],
    caseStudyTitle: "How DTC Brand Achieved 3x ROAS Improvement",
    caseStudyDescription:
      "A direct-to-consumer fashion brand used Advizer to optimize their creative strategy across Facebook and Instagram, resulting in a 3x improvement in return on ad spend and 55% higher conversion rates.",
    metrics: [
      { label: "Conversion Rate Lift", value: "+55%" },
      { label: "Targeting Effectiveness", value: "+40%" },
      { label: "Market Adaptation", value: "60% faster" },
      { label: "Average Order Value", value: "+25%" },
    ],
  },
  {
    id: "startups",
    icon: "🚀",
    title: "Startups & SMEs",
    benefits: ["70% cost reduction in ad testing", "45% better market penetration", "50% faster growth scaling"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <LineChart className="w-12 h-12 text-purple-400" />
      </div>
    ),
    interactivityLabel: "startup success stories",
    detailedBenefits: [
      {
        title: "Cost-Efficient Ad Testing",
        description:
          "Advizer's predictive analytics reduce the need for extensive A/B testing, cutting ad testing costs by 70% while maintaining quality insights.",
      },
      {
        title: "Accelerated Market Penetration",
        description:
          "Our platform helps startups identify the most effective messaging for their target market, improving market penetration by 45%.",
      },
      {
        title: "Scalable Growth Strategy",
        description:
          "Startups using Advizer can scale their advertising efforts 50% faster by quickly identifying what works and applying those insights across campaigns.",
      },
    ],
    caseStudyTitle: "How Tech Startup Achieved Product-Market Fit Faster",
    caseStudyDescription:
      "A SaaS startup used Advizer to test different value propositions and creative approaches, identifying their optimal market positioning in weeks instead of months, saving $50,000 in marketing spend.",
    metrics: [
      { label: "Testing Cost Reduction", value: "70%" },
      { label: "Market Penetration", value: "+45%" },
      { label: "Growth Scaling", value: "50% faster" },
      { label: "Budget Efficiency", value: "+65%" },
    ],
  },
  {
    id: "social",
    icon: "📱",
    title: "Social Media Managers",
    benefits: ["65% better content performance", "40% higher engagement rates", "50% more efficient scheduling"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <Activity className="w-12 h-12 text-pink-400" />
      </div>
    ),
    interactivityLabel: "platform-specific benefits",
    detailedBenefits: [
      {
        title: "Content Performance Optimization",
        description:
          "Advizer analyzes which content elements drive engagement, helping social media managers improve content performance by 65%.",
      },
      {
        title: "Engagement Strategy Enhancement",
        description:
          "Our platform identifies patterns in user engagement, helping increase engagement rates by 40% through optimized creative and posting strategies.",
      },
      {
        title: "Efficient Content Planning",
        description:
          "With data-driven insights on what works best for each platform, social media managers can plan and schedule content 50% more efficiently.",
      },
    ],
    caseStudyTitle: "How Social Team Doubled Engagement Across Platforms",
    caseStudyDescription:
      "A social media team managing multiple brand accounts used Advizer to optimize their content strategy, resulting in doubled engagement rates and 65% better overall content performance.",
    metrics: [
      { label: "Content Performance", value: "+65%" },
      { label: "Engagement Rates", value: "+40%" },
      { label: "Scheduling Efficiency", value: "+50%" },
      { label: "Cross-Platform ROI", value: "+55%" },
    ],
  },
  {
    id: "brand",
    icon: "🏢",
    title: "Brand Managers",
    benefits: ["45% better brand consistency", "35% higher brand recall", "50% improved message clarity"],
    visualComponent: (
      <div className="w-full h-full flex items-center justify-center">
        <Target className="w-12 h-12 text-red-400" />
      </div>
    ),
    interactivityLabel: "brand success stories",
    detailedBenefits: [
      {
        title: "Enhanced Brand Consistency",
        description:
          "Advizer helps brand managers maintain 45% better consistency across campaigns by identifying which elements strengthen brand identity.",
      },
      {
        title: "Improved Brand Recall",
        description:
          "Our analytics identify which brand elements drive recognition, helping increase brand recall by 35% through optimized creative.",
      },
      {
        title: "Message Clarity Optimization",
        description:
          "Advizer analyzes how audiences respond to different messaging approaches, improving message clarity by 50% across campaigns.",
      },
    ],
    caseStudyTitle: "How Consumer Brand Revitalized Their Market Position",
    caseStudyDescription:
      "A consumer packaged goods brand used Advizer to analyze their brand perception across digital channels, identifying key opportunities that led to a 35% increase in brand recall and stronger market positioning.",
    metrics: [
      { label: "Brand Consistency", value: "+45%" },
      { label: "Brand Recall", value: "+35%" },
      { label: "Message Clarity", value: "+50%" },
      { label: "Brand Sentiment", value: "+40%" },
    ],
  },
]

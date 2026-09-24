export type NewsLink = {
  label: string
  href: string
}

export type NewsItem = {
  date: string
  text: string
  links?: NewsLink[]
}

export const news: NewsItem[] = [
  {
    date: "Sep 2026",
    text: "My final work from my master's study has been accepted to NeurIPS 26'. This work investigates whether combining generative models with Shapley values can reduce baseline sensitivity and lead to more faithful feature attribution.",
  },
  {
    date: "Mar 2026",
    text: "Joined Aalto University and TAC Lab as a Doctoral Student, supervised by Asst. Prof. Sebastian Szyller.",
    links: [
      { label: "Aalto University", href: "https://www.aalto.fi/en" },
      { label: "TAC Lab", href: "https://taclab.aalto.fi/" },
      { label: "Sebastian Szyller", href: "https://sebszyller.com/" },
    ],
  },
  {
    date: "Jan 2026",
    text: "Our paper FairSHAP has been accepted by AISTATS 2026.",
  },
  {
    date: "Sep 2025",
    text: "Our paper FairSHAP has been accepted by NeurIPS 2025 WiML workshop.",
  },
]

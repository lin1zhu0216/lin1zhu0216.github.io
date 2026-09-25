export type Publication = {
  authors: string
  title: string
  venue?: string
  links?: { label: string; href: string }[]
}

type PublicationSection = {
  title: string
  papers: Publication[]
}

export const publicationSections: PublicationSection[] = [
  {
    title: "Feature Attribution & XAI",
    papers: [
      {
        authors: "Lin Zhu*, Yijun Bian*, Lei You",
        title: "FairSHAP: Preprocessing for Fairness Through Attribution-Based Data Augmentation",
        venue:
          "The 29th International Conference on Artificial Intelligence and Statistics (AISTATS 26')",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2505.11111" },
          { label: "code", href: "https://github.com/ZhuMuMu0216/FairSHAP" },
        ],
      },
      {
        authors: "Cenwei Zhang*, Lin Zhu*, Manxi Lin, Lei You",
        title: "From Baselines to Transport Geodesics: Axiomatic Attribution via Optimal Generative Flows",
        venue:
          "The 40th Annual Conference on Neural Information Processing Systems (NeurIPS 26')",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2603.05093" },
          { label: "code", href: "https://github.com/cenweizhang/OTFlowSHAP" },
          { label: "huggingface", href: "https://huggingface.co/" },
        ],
      },
      {
        authors: "Quoc-Huy Trinh*, Lin Zhu*, Sebastian Szyller",
        title: "How Context Attribution Handles What the Model Already Knows",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2607.23804" },
        ],
      },
      {
        authors: "Lin Zhu, Lei You",
        title: "xai-cola: A Python library for sparsifying counterfactual explanations",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2602.21845" },
          { label: "code", href: "https://github.com/understanding-ml/COLA" },
          { label: "software", href: "https://pypi.org/project/xai-cola/" },
        ],
      },
    ],
  },
  {
    title: "AI Safety",
    papers: [],
  },
]

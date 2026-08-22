export type Publication = {
  authors: string
  title: string
  titleHref?: string
  venue?: string
  links?: { label: string; href: string }[]
}

type PublicationSection = {
  title: string
  papers: Publication[]
}

export const publicationSections: PublicationSection[] = [
  {
    title: "Accepted",
    papers: [
      {
        authors: "Lin Zhu, Yijun Bian, Lei You",
        title: "FairSHAP: Preprocessing for Fairness Through Attribution-Based Data Augmentation",
        titleHref:
          "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1K7pxVoAAAAJ&citation_for_view=1K7pxVoAAAAJ:d1gkVwhDpl0C",
        venue:
          "The 29th International Conference on Artificial Intelligence and Statistics (AISTATS 26')",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2505.11111" },
          { label: "code", href: "https://github.com/ZhuMuMu0216/FairSHAP" },
        ],
      },
    ],
  },
  {
    title: "Preprint",
    papers: [
      {
        authors: "Quoc-Huy Trinh*, Lin Zhu*, Sebastian Szyller",
        title: "How Context Attribution Handles What the Model Already Knows",
        titleHref:
          "https://arxiv.org/abs/2607.23804",
        venue: "arXiv preprint arXiv:2607.23804",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2607.23804" },
        ],
      },
      {
        authors: "Cenwei Zhang*, Lin Zhu*, Manxi Lin, Lei You",
        title: "From Baselines to Transport Geodesics: Axiomatic Attribution via Optimal Generative Flows",
        titleHref:
          "https://arxiv.org/abs/2603.05093",
        venue: "arXiv preprint arXiv:2603.05093",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2603.05093" },
          { label: "code", href: "https://github.com/cenweizhang/OTFlowSHAP" },
          { label: "huggingface", href: "https://huggingface.co/" },
        ],
      },
      {
        authors: "Lin Zhu, Lei You",
        title: "xai-cola: A Python library for sparsifying counterfactual explanations",
        titleHref:
          "https://arxiv.org/abs/2602.21845",
        venue: "arXiv preprint arXiv:2602.21845",
        links: [
          { label: "arxiv", href: "https://arxiv.org/abs/2602.21845" },
          { label: "software", href: "https://pypi.org/project/xai-cola/" },
        ],
      },
    ],
  },
]

export default [
    {
      id: 1,
      plan: "FREE",
      price: 0,
      details: [
        {feature: "Single User", available: true},
        {feature: "5GB Storage", available: true},
        {feature: "Community Access", available: false},
        {feature: "Unlimited Private Projects", available: false},
        {feature: "Unlimited Free Subdomains", available: false},
        {feature: "Dedicated Phone support", available: false},
      ],
    },
    {
      id: 2,
      plan: "PLUS",
      price: 9,
      details: [
        {feature: "5 User", available: true},
        {feature: "50GB Storage", available: true},
        {feature: "Community Access", available: true},
        {feature: "Unlimited Private Projects", available: true},
        {feature: "Unlimited Free Subdomains", available: false},
        {feature: "Dedicated Phone support", available: false},
      ],
    },
    {
      id: 3,
      plan: "PRO",
      price: 49,
      details: [
        {feature: "Unlimited User", available: true},
        {feature: "150GB Storage", available: true},
        {feature: "Community Access", available: true},
        {feature: "Unlimited Private Projects", available: true},
        {feature: "Unlimited Free Subdomains", available: true},
        {feature: "Dedicated Phone support", available: true},
      ],
    },
  ];
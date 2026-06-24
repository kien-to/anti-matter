export type Lang = 'en' | 'vi';

export interface Translations {
  nav: {
    links: { label: string; href: string }[];
    bookCall: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    headlineStart: string;
    headlineAccent: string;
    headlineEnd: string;
    sub: string;
    cta1: string;
    cta2: string;
    socialProof: string;
  };
  howItWorks: {
    label: string;
    title: string;
    sub: string;
    steps: { step: string; title: string; description: string }[];
  };
  features: {
    label: string;
    title: string;
    sub: string;
    services: { title: string; description: string }[];
  };
  whyGojo: {
    label: string;
    titleMain: string;
    titleAccent: string;
    p1: string;
    p2: string;
    thGojo: string;
    thTypical: string;
    comparisons: string[];
  };
  testimonials: {
    label: string;
    title: string;
    items: { name: string; role: string; initials: string; quote: string }[];
  };
  pricing: {
    label: string;
    title: string;
    sub: string;
    mostPopular: string;
    perProject: string;
    notSure: string;
    bookCall: string;
    figureOut: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      highlight: boolean;
    }[];
  };
  faq: {
    label: string;
    title: string;
    subText: string;
    subLink: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    sub: string;
    cta1: string;
    cta2: string;
    responseTime: string;
  };
  footer: {
    tagline: string;
    bookCall: string;
    copyright: string;
    slogan: string;
    links: Record<string, { label: string; href: string }[]>;
  };
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      links: [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      bookCall: 'Book a Call',
      getStarted: 'Get Started Free',
    },
    hero: {
      badge: 'No coding experience needed',
      headlineStart: 'Your app idea,',
      headlineAccent: 'built and yours',
      headlineEnd: 'to keep',
      sub: 'We build your custom app from scratch — then teach you how to maintain, update, and grow it yourself. No coding background required.',
      cta1: 'Start Building My App',
      cta2: 'See How It Works',
      socialProof: '120+ founders launched their apps with Gojo',
    },
    howItWorks: {
      label: 'The Process',
      title: 'From idea to independence in 3 steps',
      sub: 'Most agencies build your app and leave. Gojo builds it and makes sure you never need to hire someone just to change a button color.',
      steps: [
        { step: '01', title: 'Share your idea', description: "Tell us what problem you want to solve. No technical jargon needed — just explain it like you'd tell a friend." },
        { step: '02', title: 'We build it together', description: 'Our team designs and builds your app. You stay involved at every milestone so there are no surprises.' },
        { step: '03', title: 'You learn to own it', description: "We hand off your app with a personalized training plan. You'll know how to add features, fix issues, and keep it growing." },
      ],
    },
    features: {
      label: 'What We Build',
      title: 'Any app you can imagine',
      sub: 'If you can describe it, we can build it — and teach you how to run it.',
      services: [
        { title: 'Mobile Apps', description: 'iOS and Android apps for your business, customers, or community.' },
        { title: 'Web Apps', description: 'Custom web platforms that work on any device, any browser.' },
        { title: 'Online Stores', description: "Sell products or services with a storefront that's truly yours." },
        { title: 'Booking Systems', description: 'Let customers schedule appointments, classes, or consultations.' },
        { title: 'Community Platforms', description: 'Membership sites, forums, or directories for your audience.' },
        { title: 'Internal Tools', description: 'Dashboards and workflows that replace clunky spreadsheets.' },
        { title: 'Course Platforms', description: 'Deliver training, lessons, or content to your students.' },
        { title: 'Client Portals', description: 'Secure spaces where you collaborate with your clients online.' },
      ],
    },
    whyGojo: {
      label: 'Why Gojo is Different',
      titleMain: 'Most agencies build the app.',
      titleAccent: 'We build your confidence too.',
      p1: "When you hire a typical agency, you get a finished product — and complete dependence on them for every future change. Gojo is different. We believe you should understand and control your own technology.",
      p2: "Every Gojo project ends with a hands-on knowledge transfer. You'll know exactly how your app works, how to add new features, and who to call if something breaks — without paying us every single time.",
      thGojo: 'Gojo',
      thTypical: 'Typical Agency',
      comparisons: [
        'You own the source code',
        'Handoff training included',
        'Ongoing support & guidance',
        'Plain-English documentation',
        'No technical jargon required',
        'You can update it yourself later',
      ],
    },
    testimonials: {
      label: 'Real Stories',
      title: 'Founders who built — and now own — their apps',
      items: [
        { name: 'Sarah M.', role: 'Boutique owner', initials: 'SM', quote: "I had zero coding knowledge and was terrified of the technical side. Gojo built my booking app and spent two weeks making sure I could manage it myself. I've added three new features on my own since launch." },
        { name: 'James P.', role: 'Fitness coach', initials: 'JP', quote: "Every other agency I talked to treated me like I couldn't understand anything. Gojo explained everything in plain English. I now know exactly what's going on under the hood of my client portal." },
        { name: 'Aisha L.', role: 'Nonprofit director', initials: 'AL', quote: "We were stuck paying a developer $150/hr for simple updates. After Gojo's training, my operations manager handles most changes herself. We've saved thousands already." },
        { name: 'Rafael B.', role: 'Restaurant owner', initials: 'RB', quote: "The app looks better than anything I expected, and I actually understand how it works now. When I needed to add a loyalty program feature, I did it myself with just the docs Gojo provided." },
      ],
    },
    pricing: {
      label: 'Pricing',
      title: 'Transparent pricing, no surprises',
      sub: "Every plan includes full source code ownership and a training program. You'll never be locked in.",
      mostPopular: 'Most Popular',
      perProject: '/ project',
      notSure: "Not sure which plan fits?",
      bookCall: "Book a free 30-min call",
      figureOut: "and we'll figure it out together.",
      plans: [
        {
          name: 'Starter', price: '$2,500', description: 'For simple apps with one core feature.',
          features: ['Up to 5 screens / pages', '1 core feature built', '1-week handoff training', 'Plain-English documentation', '30 days post-launch support'],
          cta: 'Get Started', highlight: false,
        },
        {
          name: 'Builder', price: '$6,500', description: 'For full-featured apps most founders need.',
          features: ['Up to 15 screens / pages', 'Up to 5 features', '2-week hands-on training', 'Video walkthroughs included', '90 days post-launch support', '1 minor update per month'],
          cta: 'Most Popular', highlight: true,
        },
        {
          name: 'Growth', price: 'Custom', description: 'For complex products or ongoing collaboration.',
          features: ['Unlimited screens & features', 'Dedicated project manager', 'Monthly strategy sessions', 'Priority support (24h response)', 'Quarterly feature roadmap', 'Team training included'],
          cta: 'Talk to Us', highlight: false,
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Questions you might have',
      subText: "Can't find what you're looking for?",
      subLink: 'Just ask us directly.',
      items: [
        { q: 'Do I need any technical knowledge to work with Gojo?', a: "None at all. If you can explain your idea in plain language, we can build it. We handle all the technical complexity and explain things in terms that make sense to you." },
        { q: 'What happens after the app is built?', a: "That's where Gojo is different from a typical agency. We spend dedicated time teaching you how your app works — how to update content, add new features, and troubleshoot common issues. You'll receive video walkthroughs and plain-English documentation you can refer back to anytime." },
        { q: "Who owns the app and the code when it's done?", a: "You do, completely. We transfer full ownership of the source code to you at the end of the project. You're never locked into using us for future work." },
        { q: 'How long does it take to build an app?', a: 'A Starter project typically takes 4–6 weeks. A Builder project is 8–12 weeks. We work in milestones and keep you updated throughout, so there are no surprises.' },
        { q: 'What if I need changes or new features after launch?', a: "Builder and Growth plans include post-launch support. After that period, you can either make changes yourself (that's the point of the training!), hire any developer to work on the code, or come back to us for additional work — your choice." },
        { q: 'What types of apps do you build?', a: 'We build web apps, mobile apps (iOS + Android), internal business tools, e-commerce stores, booking systems, client portals, community platforms, and more. If you can describe what it needs to do, we can scope it out.' },
        { q: 'Is there a free consultation?', a: "Yes. Every project starts with a free 30-minute discovery call. We'll hear about your idea, share our honest assessment, and tell you what a project would look like — no commitment required." },
      ],
    },
    cta: {
      title: 'Ready to turn your idea into an app you truly own?',
      sub: 'Book a free 30-minute call. No pitch deck. No commitment. Just a conversation about your idea and how we can help.',
      cta1: 'Book a Free Call',
      cta2: 'View Pricing First',
      responseTime: 'Responds within 1 business day',
    },
    footer: {
      tagline: 'Helping non-technical founders build apps they understand, own, and can grow.',
      bookCall: 'Book a free call',
      copyright: 'All rights reserved.',
      slogan: 'Built for founders who build — not just for coders.',
      links: {
        Product: [
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Services', href: '#services' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ],
        Company: [
          { label: 'About', href: '#about' },
          { label: 'Blog', href: '#blog' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' },
        ],
        Legal: [
          { label: 'Privacy Policy', href: '#privacy' },
          { label: 'Terms of Service', href: '#terms' },
          { label: 'Refund Policy', href: '#refunds' },
        ],
      },
    },
  },
  vi: {
    nav: {
      links: [
        { label: 'Cách Hoạt Động', href: '#how-it-works' },
        { label: 'Dịch Vụ', href: '#services' },
        { label: 'Bảng Giá', href: '#pricing' },
        { label: 'Câu Hỏi Thường Gặp', href: '#faq' },
      ],
      bookCall: 'Đặt Lịch Tư Vấn',
      getStarted: 'Bắt Đầu Miễn Phí',
    },
    hero: {
      badge: 'Không cần kinh nghiệm lập trình',
      headlineStart: 'Ý tưởng ứng dụng của bạn,',
      headlineAccent: 'được xây dựng và thuộc về bạn',
      headlineEnd: 'mãi mãi',
      sub: 'Chúng tôi xây dựng ứng dụng theo yêu cầu từ đầu — sau đó dạy bạn cách duy trì, cập nhật và phát triển nó. Không cần kiến thức lập trình.',
      cta1: 'Bắt Đầu Xây Dựng Ứng Dụng',
      cta2: 'Xem Cách Hoạt Động',
      socialProof: '120+ nhà sáng lập đã ra mắt ứng dụng với Gojo',
    },
    howItWorks: {
      label: 'Quy Trình',
      title: 'Từ ý tưởng đến tự chủ trong 3 bước',
      sub: 'Hầu hết agency xây dựng ứng dụng rồi rời đi. Gojo xây dựng và đảm bảo bạn không bao giờ cần thuê người chỉ để thay đổi màu nút.',
      steps: [
        { step: '01', title: 'Chia sẻ ý tưởng', description: 'Hãy cho chúng tôi biết vấn đề bạn muốn giải quyết. Không cần thuật ngữ kỹ thuật — chỉ cần giải thích như bạn nói với bạn bè.' },
        { step: '02', title: 'Chúng tôi cùng xây dựng', description: 'Đội ngũ của chúng tôi thiết kế và xây dựng ứng dụng. Bạn tham gia ở mỗi cột mốc để không có bất ngờ.' },
        { step: '03', title: 'Bạn học cách làm chủ', description: 'Chúng tôi bàn giao ứng dụng kèm kế hoạch đào tạo cá nhân hóa. Bạn sẽ biết cách thêm tính năng, sửa lỗi và tiếp tục phát triển.' },
      ],
    },
    features: {
      label: 'Những Gì Chúng Tôi Xây Dựng',
      title: 'Bất kỳ ứng dụng nào bạn có thể tưởng tượng',
      sub: 'Nếu bạn có thể mô tả, chúng tôi có thể xây dựng — và dạy bạn cách vận hành.',
      services: [
        { title: 'Ứng Dụng Di Động', description: 'Ứng dụng iOS và Android cho doanh nghiệp, khách hàng hoặc cộng đồng của bạn.' },
        { title: 'Ứng Dụng Web', description: 'Nền tảng web tùy chỉnh hoạt động trên mọi thiết bị, mọi trình duyệt.' },
        { title: 'Cửa Hàng Trực Tuyến', description: 'Bán sản phẩm hoặc dịch vụ với cửa hàng thực sự thuộc về bạn.' },
        { title: 'Hệ Thống Đặt Lịch', description: 'Cho phép khách hàng đặt lịch hẹn, lớp học hoặc tư vấn.' },
        { title: 'Nền Tảng Cộng Đồng', description: 'Trang thành viên, diễn đàn hoặc danh bạ cho cộng đồng của bạn.' },
        { title: 'Công Cụ Nội Bộ', description: 'Bảng điều khiển và quy trình thay thế bảng tính cồng kềnh.' },
        { title: 'Nền Tảng Khóa Học', description: 'Cung cấp đào tạo, bài học hoặc nội dung cho học viên của bạn.' },
        { title: 'Cổng Thông Tin Khách Hàng', description: 'Không gian an toàn để cộng tác với khách hàng trực tuyến.' },
      ],
    },
    whyGojo: {
      label: 'Tại Sao Gojo Khác Biệt',
      titleMain: 'Hầu hết agency xây dựng ứng dụng.',
      titleAccent: 'Chúng tôi còn xây dựng sự tự tin của bạn.',
      p1: 'Khi bạn thuê một agency thông thường, bạn nhận được sản phẩm hoàn chỉnh — và hoàn toàn phụ thuộc vào họ cho mọi thay đổi trong tương lai. Gojo thì khác. Chúng tôi tin rằng bạn nên hiểu và kiểm soát công nghệ của chính mình.',
      p2: 'Mỗi dự án Gojo kết thúc bằng quá trình chuyển giao kiến thức thực hành. Bạn sẽ biết chính xác ứng dụng hoạt động như thế nào, cách thêm tính năng mới và ai để liên hệ khi có sự cố — mà không cần trả tiền cho chúng tôi mỗi lần.',
      thGojo: 'Gojo',
      thTypical: 'Agency Thông Thường',
      comparisons: [
        'Bạn sở hữu mã nguồn',
        'Bao gồm đào tạo bàn giao',
        'Hỗ trợ & hướng dẫn liên tục',
        'Tài liệu dễ hiểu',
        'Không cần thuật ngữ kỹ thuật',
        'Bạn có thể tự cập nhật sau này',
      ],
    },
    testimonials: {
      label: 'Câu Chuyện Thực Tế',
      title: 'Những nhà sáng lập đã xây dựng — và hiện sở hữu — ứng dụng của họ',
      items: [
        { name: 'Sarah M.', role: 'Chủ cửa hàng', initials: 'SM', quote: 'Tôi không có kiến thức lập trình và rất sợ phần kỹ thuật. Gojo xây dựng ứng dụng đặt lịch cho tôi và dành hai tuần đảm bảo tôi có thể tự quản lý. Tôi đã tự thêm ba tính năng mới kể từ khi ra mắt.' },
        { name: 'James P.', role: 'Huấn luyện viên thể hình', initials: 'JP', quote: 'Mọi agency khác tôi liên hệ đều đối xử như thể tôi không hiểu gì. Gojo giải thích mọi thứ bằng ngôn ngữ đơn giản. Tôi giờ biết chính xác những gì đang diễn ra trong ứng dụng của mình.' },
        { name: 'Aisha L.', role: 'Giám đốc tổ chức phi lợi nhuận', initials: 'AL', quote: 'Chúng tôi phải trả $150/giờ cho các cập nhật đơn giản. Sau khóa đào tạo của Gojo, quản lý vận hành của tôi tự xử lý hầu hết các thay đổi. Chúng tôi đã tiết kiệm được hàng nghìn đô.' },
        { name: 'Rafael B.', role: 'Chủ nhà hàng', initials: 'RB', quote: 'Ứng dụng trông đẹp hơn bất kỳ thứ gì tôi mong đợi, và tôi thực sự hiểu cách nó hoạt động. Khi tôi cần thêm tính năng khách hàng thân thiết, tôi tự làm với tài liệu Gojo cung cấp.' },
      ],
    },
    pricing: {
      label: 'Bảng Giá',
      title: 'Giá minh bạch, không bất ngờ',
      sub: 'Mọi gói đều bao gồm quyền sở hữu toàn bộ mã nguồn và chương trình đào tạo. Bạn sẽ không bao giờ bị ràng buộc.',
      mostPopular: 'Phổ Biến Nhất',
      perProject: '/ dự án',
      notSure: 'Chưa chắc gói nào phù hợp?',
      bookCall: 'Đặt lịch gọi miễn phí 30 phút',
      figureOut: 'và chúng tôi sẽ cùng tìm ra.',
      plans: [
        {
          name: 'Khởi Đầu', price: '$2,500', description: 'Cho ứng dụng đơn giản với một tính năng cốt lõi.',
          features: ['Tối đa 5 màn hình / trang', '1 tính năng cốt lõi', 'Đào tạo bàn giao 1 tuần', 'Tài liệu dễ hiểu', '30 ngày hỗ trợ sau khi ra mắt'],
          cta: 'Bắt Đầu', highlight: false,
        },
        {
          name: 'Xây Dựng', price: '$6,500', description: 'Cho ứng dụng đầy đủ tính năng mà hầu hết nhà sáng lập cần.',
          features: ['Tối đa 15 màn hình / trang', 'Tối đa 5 tính năng', 'Đào tạo thực hành 2 tuần', 'Bao gồm video hướng dẫn', '90 ngày hỗ trợ sau khi ra mắt', '1 cập nhật nhỏ mỗi tháng'],
          cta: 'Phổ Biến Nhất', highlight: true,
        },
        {
          name: 'Tăng Trưởng', price: 'Liên hệ', description: 'Cho sản phẩm phức tạp hoặc hợp tác lâu dài.',
          features: ['Không giới hạn màn hình & tính năng', 'Quản lý dự án chuyên dụng', 'Phiên chiến lược hàng tháng', 'Hỗ trợ ưu tiên (phản hồi 24h)', 'Lộ trình tính năng hàng quý', 'Bao gồm đào tạo cho nhóm'],
          cta: 'Liên Hệ', highlight: false,
        },
      ],
    },
    faq: {
      label: 'Câu Hỏi Thường Gặp',
      title: 'Những câu hỏi bạn có thể có',
      subText: 'Không tìm thấy câu trả lời?',
      subLink: 'Hãy hỏi trực tiếp chúng tôi.',
      items: [
        { q: 'Tôi có cần kiến thức kỹ thuật để làm việc với Gojo không?', a: 'Không cần chút nào. Nếu bạn có thể giải thích ý tưởng bằng ngôn ngữ đơn giản, chúng tôi có thể xây dựng nó. Chúng tôi xử lý tất cả sự phức tạp kỹ thuật và giải thích mọi thứ theo cách dễ hiểu với bạn.' },
        { q: 'Điều gì xảy ra sau khi ứng dụng được xây dựng?', a: 'Đó là điểm Gojo khác biệt. Chúng tôi dành thời gian chuyên dụng dạy bạn cách ứng dụng hoạt động — cập nhật nội dung, thêm tính năng mới và khắc phục sự cố. Bạn sẽ nhận được video hướng dẫn và tài liệu dễ hiểu để tham khảo bất cứ lúc nào.' },
        { q: 'Ai sở hữu ứng dụng và mã nguồn khi hoàn thành?', a: 'Bạn sở hữu hoàn toàn. Chúng tôi chuyển giao toàn bộ quyền sở hữu mã nguồn cho bạn vào cuối dự án. Bạn không bao giờ bị ràng buộc phải tiếp tục sử dụng dịch vụ của chúng tôi.' },
        { q: 'Mất bao lâu để xây dựng một ứng dụng?', a: 'Dự án Khởi Đầu thường mất 4–6 tuần. Dự án Xây Dựng mất 8–12 tuần. Chúng tôi làm việc theo các cột mốc và cập nhật thường xuyên, không có bất ngờ.' },
        { q: 'Nếu tôi cần thay đổi hoặc tính năng mới sau khi ra mắt?', a: 'Gói Xây Dựng và Tăng Trưởng bao gồm hỗ trợ sau khi ra mắt. Sau đó, bạn có thể tự thực hiện thay đổi, thuê bất kỳ lập trình viên nào, hoặc quay lại với chúng tôi — tùy bạn.' },
        { q: 'Bạn xây dựng những loại ứng dụng nào?', a: 'Chúng tôi xây dựng ứng dụng web, ứng dụng di động (iOS + Android), công cụ kinh doanh nội bộ, cửa hàng thương mại điện tử, hệ thống đặt lịch, cổng thông tin khách hàng, nền tảng cộng đồng và nhiều hơn nữa.' },
        { q: 'Có tư vấn miễn phí không?', a: 'Có. Mỗi dự án bắt đầu với cuộc gọi khám phá miễn phí 30 phút. Chúng tôi lắng nghe ý tưởng, chia sẻ đánh giá trung thực và cho bạn biết dự án sẽ như thế nào — không cần cam kết.' },
      ],
    },
    cta: {
      title: 'Sẵn sàng biến ý tưởng thành ứng dụng thực sự thuộc về bạn?',
      sub: 'Đặt lịch gọi miễn phí 30 phút. Không cần slide thuyết trình. Không cần cam kết. Chỉ là một cuộc trò chuyện về ý tưởng của bạn.',
      cta1: 'Đặt Lịch Gọi Miễn Phí',
      cta2: 'Xem Bảng Giá Trước',
      responseTime: 'Phản hồi trong vòng 1 ngày làm việc',
    },
    footer: {
      tagline: 'Giúp các nhà sáng lập không chuyên kỹ thuật xây dựng ứng dụng họ hiểu, sở hữu và có thể phát triển.',
      bookCall: 'Đặt lịch tư vấn miễn phí',
      copyright: 'Đã đăng ký bản quyền.',
      slogan: 'Dành cho những nhà sáng lập xây dựng — không chỉ cho lập trình viên.',
      links: {
        'Sản Phẩm': [
          { label: 'Cách Hoạt Động', href: '#how-it-works' },
          { label: 'Dịch Vụ', href: '#services' },
          { label: 'Bảng Giá', href: '#pricing' },
          { label: 'Câu Hỏi Thường Gặp', href: '#faq' },
        ],
        'Công Ty': [
          { label: 'Về Chúng Tôi', href: '#about' },
          { label: 'Blog', href: '#blog' },
          { label: 'Tuyển Dụng', href: '#careers' },
          { label: 'Liên Hệ', href: '#contact' },
        ],
        'Pháp Lý': [
          { label: 'Chính Sách Bảo Mật', href: '#privacy' },
          { label: 'Điều Khoản Dịch Vụ', href: '#terms' },
          { label: 'Chính Sách Hoàn Tiền', href: '#refunds' },
        ],
      },
    },
  },
};

export default translations;

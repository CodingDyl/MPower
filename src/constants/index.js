import {accreCert, beeCert, comPro, comForm, membership} from "../assets";

const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#accredidation",
      title: "Accreditation",
    },
    {
        id: "#verification",
        title: "Verification"
    },
    {
      id: "#faq",
      title: "Get Assistance"
    },
    {
      id: "#contact",
      title: "Contact Us"
    }
  ];

  const services = [
    {
      title: "B-BBEE Verification & Certification",
      //icon: brakes,
    },
    {
      title: 'B-BBEE Advisory Services',
      //icon: autoElectrical,
    },
    {
      title: "Competent Person's Reports and Opinions",
      //icon: inspection,
    },
    {
      title: 'B-BBEE Training',
      //icon: batteries,
    },
  ];

  const sector1 = [
    {
      title: "DTI",
      //icon: brakes,
    },
    {
      title: 'MAC Sector Code',
      //icon: autoElectrical,
    },
    {
      title: "ICT Sector Code",
      //icon: inspection,
    },
    {
      title: 'Agri Sector Code',
      //icon: batteries,
    },
    {
      title: 'Property Sector Code',
      //icon: batteries,
    },
  ];

  const sector2 = [
    {
      title: "Construction Sector Code",
      //icon: brakes,
    },
    {
      title: 'Tourism Sector Code',
      //icon: autoElectrical,
    },
    {
      title: "Integrated Transport Sector Code",
      //icon: inspection,
    },
    {
      title: 'Forestry Sector Code',
      //icon: batteries,
    },
    {
      title: 'Financial Services Sector Code',
      //icon: batteries,
    },
    {
      title: 'Legal Sector Code',
      //icon: batteries,
    },
  ];

  const footerLinks = [
    {
        title: "About",
        links: [
            { label: "Who we are", link: "#about" },
            { label: "Certificate", link: "#forms" },
            { label: "Contact", link: "#contact" },
            { label: "FAQ", link: '#faq'}
        ]
    },
    {
        title: "Declarations",
        links: [ {
            label: "Complaints, appeals and disputes",
            link: "#complaints"
        },
        {
            label: "Impartiality Statement",
            link: "#impartiality"
        },
        {
            label: "B-BBEE Consulting",
            link: "#faq"
        },
        {
            label: "B-BBEE Certificate",
            link: "#forms"
        },
        {
          label: "Accreditation",
          link: "#accredidation"
        },
        {
          label: "Youth Employment Service",
          link: "#faq"
        },
    ]
    },
    {
        title: "Information",
        links: [ {
            label: "Verification Approach",
            link: "#verification"
        },
        {
            label: "Complaints",
            link: "#complaints"
        },
        {
            label: "Accreditation",
            link: "#accreditation"
        },
        {
            label: "BEE Directory",
            link: "https://cloud.procureactiv.co.za/procurement/suppliers/advanced-search"
        }
    ]
    }
];

const documents = [
    {
        title: "Company Profile",
        download: "mPowerRatings_Company_Profile.pdf",
        image: comPro,
        text: 'text-white'
    },
    {
        title: 'Company Information Form',
        download: "Company_Information_Form.xls",
        image: comForm,
        text: 'text-white'
    },
    {
        title: 'Appeals & Complaints Policy Form',
        download: "Appeals_&_Complaints_Policy.pdf",
        image: membership,
        text: 'text-white'
    },
    {
        title: 'Accreditation Certificate',
        download: "BVA204_Certificate_of_Accreditation.pdf",
        image: accreCert,
        text: 'text-white'
    },
    {
        title: "B-BBEE Certificate",
        download: "mPowerRatings_B-BBEE_Certificate.pdf",
        image: beeCert,
        text: 'text-white'
    },
    {
        title: "ABP Membership Certificate",
        download: "mPower_ABP_2024_membershipcertificate.pdf",
        image: membership,
        text: 'text-white'
    },
];

const testimonials = [
  {
    testimonial:
      "mPowerRatings delivers a professional and thorough verification process. Their team’s expertise in B-BBEE compliance gives us full confidence in our certification.",
    name: "Tanucia Coopasamy",
    designation: "Contact",
    company: "Shared Services",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "A reliable and highly competent B-BBEE verification partner. Their attention to detail and transparent process makes compliance straightforward.",
    name: "Portia Selani",
    designation: "Contact",
    company: "Deloitte",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    testimonial:
      "We trust mPowerRatings year after year for our B-BBEE verification. Their team is knowledgeable, efficient, and always professional.",
    name: "Thuli Tabudi",
    designation: "Contact",
    company: "SPAR",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    testimonial:
      "mPowerRatings’ risk-based approach and digital-first process makes them the most convenient and credible verification agency we’ve worked with.",
    name: "Mpho Nethonzhe",
    designation: "Contact",
    company: "Bafokeng Holdings",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Their expertise across multiple sector codes and the quality of their reporting sets mPowerRatings apart in the B-BBEE verification space.",
    name: "Anshen Kishun",
    designation: "Contact",
    company: "PwC",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

  export {navLinks, services, footerLinks, testimonials, sector1, sector2, documents};
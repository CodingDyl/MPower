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
      title: "Integrated Sector Code",
      //icon: inspection,
    },
    {
      title: 'Forestry Sector Code',
      //icon: batteries,
    },
    {
      title: 'Financial Sector Code',
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
        download: "../assets/mPowerRatings_Company_Profile.pdf",
        image: comPro,
        text: 'text-white'
    },
    {
        title: 'Company Information Form',
        download: "../assets/Company_Information_Form.xls",
        image: comForm,
        text: 'text-white'
    },
    {
        title: 'Appeals & Complaints Policy Form',
        download: "../assets/Appeals_&_Complaints_Policy.pdf",
        image: membership,
        text: 'text-white'
    },
    {
        title: 'Accreditation Certificate SANAS',
        download: "../assets/BVA204_SANAS_Certificate_of_Accreditation.pdf",
        image: accreCert,
        text: 'text-white'
    },
    {
        title: "B-BBEE Certificate",
        download: "../assets/mPowerRatings_B-BBEE_Certificate.pdf",
        image: beeCert,
        text: 'text-white'
    },
    {
        title: "ABP Membership Certificate",
        download: "",
        image: membership,
        text: 'text-white'
    },
];

const testimonials = [
  {
    testimonial:
      "The only place I would recommend. Love the people and the service!",
    name: "John Doe",
    designation: "Client",
    company: "mPowerRatings",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    testimonial:
      "Very professional. It’s the only place I trust in the industry.",
    name: "Jane Doe",
    designation: "Client",
    company: "mPowerRatings",
    image: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    testimonial:
      "The best place on planet earth would highly recommend",
    name: "Anne Human",
    designation: "Client",
    company: "mPowerRatings",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
];

  export {navLinks, services, footerLinks, testimonials, sector1, sector2, documents};
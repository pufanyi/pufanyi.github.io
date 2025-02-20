// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "* means equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-oi-blog",
          title: "oi-blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/oi-blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/resume/resume.pdf";
          },
        },{id: "post-stochastic-processes-and-reinforcement-learning",
      
        title: "Stochastic Processes and Reinforcement Learning",
      
      description: "Notes for NTU MH3512 Stochastic Processes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/SPRL/";
        
      },
    },{id: "post-machine-learning",
      
        title: "Machine Learning",
      
      description: "Notes for UC Berkeley CS 189 Machine Learning",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Berkeley-CS189/";
        
      },
    },{id: "post-game-theory",
      
        title: "Game Theory",
      
      description: "Notes for UC Berkeley STAT 155 Game Theory + NTU MH4320 Computational Economics",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Berkeley-STAT155/";
        
      },
    },{id: "post-uc-berkeley-cs-161-computer-security",
      
        title: "UC Berkeley CS 161 Computer Security",
      
      description: "Notes for UC Berkeley CS 161 Computer Security",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Berkeley-CS161/";
        
      },
    },{id: "post-2021-zhejiang-gao-kao",
      
        title: "2021 Zhejiang Gao Kao",
      
      description: "明天就要高考去了，今天临时抱个佛脚",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GaoKao/";
        
      },
    },{id: "post-classical-mechanics",
      
        title: "Classical Mechanics",
      
      description: "学点好玩的",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ClassicalMechanics/";
        
      },
    },{id: "post-ntu-mh3700-numerical-analysis-i",
      
        title: "NTU MH3700 Numerical Analysis I",
      
      description: "Notes for NTU MH3700 Numerical Analysis I.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/MH3700-Notes/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-maxwell-39-s-equations",
      
        title: "Maxwell&#39;s Equations",
      
      description: "学不完了学不完了学不完了啊啊啊啊啊啊啊啊啊啊啊",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Maxwell/";
        
      },
    },{id: "post-statistics-notes",
      
        title: "Statistics Notes",
      
      description: "Notes for NTU MH3500 Statistics.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/MH3500-Notes/";
        
      },
    },{id: "post-ucb-eecs-70-discrete-mathematics-and-probability-theory",
      
        title: "UCB EECS 70 Discrete Mathematics and Probability Theory",
      
      description: "My answer for the UCB EECS 70 Discrete Mathematics and Probability Theory course.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/UCBCS70/";
        
      },
    },{id: "post-hello-world",
      
        title: "Hello World!",
      
      description: "the first post on this blog",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/HelloWorld/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

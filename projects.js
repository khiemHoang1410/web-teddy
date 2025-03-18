const projects = [
    {
      image: 'assets/img/t1.jpg',
      subtitle: 'Tháng 4 năm 2022',
      title: 'Gấu Bông Siêu Mềm Mại',
      description: 'Gấu bông siêu mềm mại với thiết kế dễ thương, phù hợp làm quà tặng cho người thân, bạn bè hoặc trang trí phòng ngủ. Chất liệu vải mềm, an toàn cho người sử dụng.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t2.jpg',
      subtitle: 'Tháng 5 năm 2022',
      title: 'Gấu Bông Nhồi Bông Cao Cấp',
      description: 'Gấu bông cao cấp, được nhồi bông chất lượng, không bị xẹp sau thời gian dài sử dụng. Thiết kế dễ thương và là lựa chọn tuyệt vời cho các bé yêu.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t3.jpg',
      subtitle: 'Tháng 6 năm 2022',
      title: 'Gấu Bông Tạo Hình Nhân Vật Hoạt Hình',
      description: 'Sản phẩm gấu bông hình nhân vật hoạt hình nổi tiếng, thích hợp cho những fan hâm mộ. Chất liệu vải mềm, dễ giặt và bảo quản.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t4.jpg',
      subtitle: 'Tháng 7 năm 2022',
      title: 'Gấu Bông Hình Con Cún Mũi Hồng',
      description: 'Một chiếc gấu bông đáng yêu với đôi tai dài và mũi hồng nhỏ xinh, lý tưởng làm bạn đồng hành trong những buổi tối lạnh lẽo.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t5.jpg',
      subtitle: 'Tháng 8 năm 2022',
      title: 'Gấu Bông Mèo Con Dễ Thương',
      description: 'Gấu bông mèo con nhỏ nhắn, dễ thương, với bộ lông mềm mịn và đôi mắt to tròn, rất thích hợp để ôm ấp và làm quà tặng.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t6.jpg',
      subtitle: 'Tháng 9 năm 2022',
      title: 'Gấu Bông Hình Gấu Trúc',
      description: 'Gấu bông hình gấu trúc đáng yêu, với thân hình tròn trĩnh và bộ lông đen trắng đặc trưng, thích hợp cho những ai yêu thích động vật.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t7.jpg',
      subtitle: 'Tháng 10 năm 2022',
      title: 'Gấu Bông Hình Mèo Đội Mũ',
      description: 'Mèo bông dễ thương đội mũ xinh xắn, thiết kế ngộ nghĩnh, là người bạn tuyệt vời để trang trí phòng hay làm quà tặng.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t8.jpg',
      subtitle: 'Tháng 11 năm 2022',
      title: 'Gấu Bông Hình Chú Cáo',
      description: 'Gấu bông hình chú cáo với bộ lông cam sáng và đuôi xù, đem đến sự ấm áp và là một món đồ chơi lý tưởng cho các em bé.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t9.jpg',
      subtitle: 'Tháng 12 năm 2022',
      title: 'Gấu Bông Hình Gấu Nâu',
      description: 'Gấu bông hình gấu nâu, thiết kế đơn giản nhưng vô cùng dễ thương, thích hợp cho những ai yêu thích phong cách tự nhiên và gần gũi.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t10.jpg',
      subtitle: 'Tháng 1 năm 2023',
      title: 'Gấu Bông Hình Chú Hươu Cao Cổ',
      description: 'Gấu bông hình chú hươu cao cổ với thân dài và dáng đứng thẳng, thích hợp làm quà tặng cho những người yêu thích sự khác biệt.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t11.jpg',
      subtitle: 'Tháng 2 năm 2023',
      title: 'Gấu Bông Hình Chú Vịt',
      description: 'Gấu bông hình chú vịt đáng yêu với bộ lông vàng ấm áp và đôi chân nhỏ xinh, mang lại sự vui tươi và hạnh phúc.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t12.jpg',
      subtitle: 'Tháng 3 năm 2023',
      title: 'Gấu Bông Hình Con Heo',
      description: 'Gấu bông hình con heo đáng yêu, với bộ lông hồng mềm mại, rất thích hợp làm món quà dễ thương cho trẻ em hoặc người thân.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t13.jpg',
      subtitle: 'Tháng 4 năm 2023',
      title: 'Gấu Bông Hình Thỏ',
      description: 'Gấu bông hình thỏ với đôi tai dài và lông mềm, là người bạn thân thiết cho các bé và cũng là món quà dễ thương cho mọi lứa tuổi.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t14.jpg',
      subtitle: 'Tháng 5 năm 2023',
      title: 'Gấu Bông Hình Chú Lợn',
      description: 'Một chú gấu bông hình con lợn với bộ lông hồng đáng yêu và đôi tai vểnh lên, là món quà tuyệt vời cho các bé trai và bé gái.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t15.jpg',
      subtitle: 'Tháng 6 năm 2023',
      title: 'Gấu Bông Hình Chú Sóc',
      description: 'Gấu bông hình chú sóc nhỏ nhắn, dễ thương với bộ lông xù, mang đến sự vui vẻ và sự ngọt ngào.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t16.jpg',
      subtitle: 'Tháng 7 năm 2023',
      title: 'Gấu Bông Hình Con Cừu',
      description: 'Gấu bông hình con cừu với bộ lông trắng mịn màng, là món quà thú vị cho những ai yêu thích sự dịu dàng và dễ thương.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t17.jpg',
      subtitle: 'Tháng 8 năm 2023',
      title: 'Gấu Bông Hình Chú Ngựa',
      description: 'Gấu bông hình chú ngựa dễ thương, mang lại cảm giác thanh thoát và sang trọng, thích hợp làm quà tặng cho những người yêu thích động vật quý hiếm.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
    {
      image: 'assets/img/t18.jpg',
      subtitle: 'Tháng 9 năm 2023',
      title: 'Gấu Bông Hình Con Voi',
      description: 'Gấu bông hình con voi lớn với đôi tai rộng và chiếc vòi dài, rất dễ thương và là món đồ chơi thú vị cho trẻ em.',
      githubLink: '#',
      liveSiteLink: 'https://example.com',
    },
]
  

  function generateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
      const projectCard = document.createElement('article');
      projectCard.classList.add('projects__card');
      
      projectCard.innerHTML = `
        <div class="projects__image">
          <img src="${project.image}" alt="Hình ảnh gấu bông" class="projects__img" />
          <a href="#" class="projects__button button">
            <i class="ri-arrow-right-up-line"></i>
          </a>
        </div>
        
        <div class="projects__content">
          <h3 class="projects__subtitle">${project.subtitle}</h3>
          <h2 class="projects__title">${project.title}</h2>
          <p class="projects__description">${project.description}</p>
        </div>
        
        <div class="projects__buttons">
          <a href="${project.liveSiteLink}" target="_blank" class="projects__link">
            <i class="ri-dribbble-line"></i>
            Trang Web
          </a>
        </div>
      `;
            projectsContainer.appendChild(projectCard);
    });
  }
    generateProjects();
  
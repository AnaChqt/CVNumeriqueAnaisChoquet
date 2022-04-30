// Teste de présentation sur la "homePage"
    const txtAnim = document.getElementById('job');

    new Typewriter(txtAnim, {
        loop: true,
        deleteSpeed: 20
    })
    .typeString('DEVELOPPEUSE WEB JUNIOR ')
    .typeString('<strong>FULL-STACK</strong>')
    .pauseFor(1000)
    .start()


// Changement de couleur pour les liens de la nav lors du scroll et changement dans l'URL
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.link');
    const nav = document.querySelector('nav');
    const navPos = nav.getBoundingClientRect(); 
    const scrollMargin = 10;

    function updateHash(hash) {
        const currentHash = window.location.hash;
        currentHash != hash && window.history.replaceState(null, null, hash);
    }

    window.onscroll = () => {
        sections.forEach((section, index) => {
            const sectionPos = section.getBoundingClientRect(); 

            if (sectionPos.top   <= navPos.bottom + scrollMargin 
            && sectionPos.bottom >= navPos.bottom) {
                links.forEach((link) => link.classList.remove('active'));
                links[index].classList.add('active');
                const hash = links[index].getAttribute('href');
                updateHash(hash);
            }
        });
    };
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const backToTopButton = document.querySelector('.back-to-top');

    // وظيفة للكشف عن التمرير وإظهار العناصر
    const revealSections = () => {
        const scrollY = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollY > section.offsetTop + 100) {
                section.classList.add('visible');
            }
        });
    };

    revealSections(); // عند تحميل الصفحة

    window.addEventListener('scroll', revealSections);

    // زر العودة إلى الأعلى
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // عرض زر العودة إلى الأعلى عند التمرير لأسفل
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // تحسين التمرير للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // تحسين الرسوم المتحركة
    const animatedElements = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    });
});

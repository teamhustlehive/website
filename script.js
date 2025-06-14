const images = document.querySelectorAll('.image');
const totalSections = images.length;
const sectionHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  images.forEach((image, index) => {
    const imageStart = index * sectionHeight;
    const imageEnd = (index + 1) * sectionHeight;

    let progress = (scrollY - imageStart) / sectionHeight;

    if (progress >= 1) {
      image.style.transform = `translateY(0%)`;
    } else if (progress <= 0) {
      image.style.transform = `translateY(100%)`;
    } else {
      image.style.transform = `translateY(${(1 - progress) * 100}%)`;
    }
  });
});
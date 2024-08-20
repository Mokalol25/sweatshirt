const imgContainer = document.querySelector('.image-container');
        const img = document.getElementById('zoomImg');

        imgContainer.addEventListener('mousemove', (e) => {
            const rect = imgContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;

            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = 'scale(1.5)'; /* Збільшує зображення на 50% */
        });

        imgContainer.addEventListener('mouseleave', () => {
            img.style.transformOrigin = 'center center';
            img.style.transform = 'scale(1)';
        });


        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.variable-img');
            const fullImageBackdrop = document.querySelector('.full-image-backdrop');
            const fullImage = document.querySelector('.full-image');
            const closeButton = document.querySelector('.close');
            const arrowLeft = document.querySelector('.arrow-left');
            const arrowRight = document.querySelector('.arrow-right');
            let currentIndex = 0;
          
            function showFullImage(index) {
              fullImage.src = images[index].src;
              fullImageBackdrop.classList.add('active');
              currentIndex = index;
            }
          
            function nextImage() {
              currentIndex = (currentIndex + 1) % images.length;
              showFullImage(currentIndex);
            }
          
            function prevImage() {
              currentIndex = (currentIndex - 1 + images.length) % images.length;
              showFullImage(currentIndex);
            }
          
            function closeFullImage() {
              fullImageBackdrop.classList.remove('active');
            }
          
            document.addEventListener('keydown', function(event) {
              if (fullImageBackdrop.classList.contains('active')) {
                if (event.key === 'ArrowRight') {
                  nextImage();
                } else if (event.key === 'ArrowLeft') {
                  prevImage();
                } else if (event.key === 'Escape') {
                  closeFullImage();
                }
              }
            });
          
            images.forEach(function(image, index) {
              image.addEventListener('click', function() {
                showFullImage(index);
              });
            });
          
            closeButton.addEventListener('click', closeFullImage);
            arrowRight.addEventListener('click', nextImage);
            arrowLeft.addEventListener('click', prevImage);
          });
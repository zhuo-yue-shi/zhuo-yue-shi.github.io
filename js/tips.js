document.addEventListener('DOMContentLoaded', () => {
    const tooltips = window.document.querySelectorAll('.tips');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (event) => {
            const tooltipText = event.target.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;

            // Determine the best position for the tooltip
            const rect = event.target.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            let position = 'top';

            if (rect.top < 30) {
                position = 'bottom';
            } else if (rect.left < 30) {
                position = 'right';
            } else if (rect.right > viewportWidth - 30) {
                position = 'left';
            } else if (rect.bottom > viewportHeight - 30) {
                position = 'top';
            }

            tooltipElement.classList.add(position);

            document.body.appendChild(tooltipElement);

            const tooltipRect = tooltipElement.getBoundingClientRect();

            if (position === 'top' && rect.top - tooltipRect.height < 0) {
                position = 'bottom';
                tooltipElement.classList.replace('top', 'bottom');
            } else if (position === 'bottom' && rect.bottom + tooltipRect.height > viewportHeight) {
                position = 'top';
                tooltipElement.classList.replace('bottom', 'top');
            } else if (position === 'left' && rect.left - tooltipRect.width < 0) {
                position = 'right';
                tooltipElement.classList.replace('left', 'right');
            } else if (position === 'right' && rect.right + tooltipRect.width > viewportWidth) {
                position = 'left';
                tooltipElement.classList.replace('right', 'left');
            }

            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.opacity = '1';

            tooltip.dataset.tooltipElement = tooltipElement;

            tooltip.addEventListener('mouseleave', () => {
                tooltipElement.remove();
            });
        });
    });
});
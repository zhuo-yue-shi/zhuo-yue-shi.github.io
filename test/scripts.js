document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.custom-tooltip');

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

            // Assume the tooltip is initially positioned at the top
            tooltipElement.classList.add(position);
            document.body.appendChild(tooltipElement);

            // Calculate the initial position
            tooltipElement.style.top = `${rect.top - tooltipElement.offsetHeight}px`;
            tooltipElement.style.left = `${rect.left + (rect.width / 2) - (tooltipElement.offsetWidth / 2)}px`;

            // Ensure the tooltip is fully visible within the viewport
            const finalTooltipRect = tooltipElement.getBoundingClientRect();

            // Adjust horizontal position
            if (finalTooltipRect.left < 0) {
                tooltipElement.style.left = `0px`;
            } else if (finalTooltipRect.right > viewportWidth) {
                tooltipElement.style.left = `${viewportWidth - tooltipElement.offsetWidth}px`;
            }

            // Adjust vertical position
            if (finalTooltipRect.top < 0) {
                tooltipElement.style.top = `${rect.bottom}px`;
                tooltipElement.classList.replace('top', 'bottom');
            } else if (finalTooltipRect.bottom > viewportHeight) {
                tooltipElement.style.top = `${rect.top - tooltipElement.offsetHeight}px`;
                tooltipElement.classList.replace('bottom', 'top');
            }

            // Show the tooltip
            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.position = 'absolute';
            tooltipElement.style.opacity = '1';

            tooltip.dataset.tooltipElement = tooltipElement;

            tooltip.addEventListener('mouseleave', () => {
                tooltipElement.remove();
            });
        });
    });
});
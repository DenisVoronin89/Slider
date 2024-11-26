from django.shortcuts import render
from .models import SliderItem


def slider_page(request):
    """
    View to display the slider page.
    Retrieves only active slider items from the database and passes them to the template.

    Args:
        request: The HTTP request object.

    Returns:
        HttpResponse: Rendered HTML page with the slider items.
    """
    slider_items = SliderItem.objects.filter(is_active=True)
    return render(request, 'index.html', {'slider_items': slider_items})


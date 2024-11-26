from django.db import models
from filer.fields.image import FilerImageField

class SliderItem(models.Model):
    """
    Model to represent an individual slider item for the slider.
    """
    title = models.CharField(max_length=200, verbose_name="Title")
    image = FilerImageField(related_name="slider_images", on_delete=models.CASCADE, verbose_name="Image")
    description = models.TextField(blank=True, verbose_name="Description")
    order = models.PositiveIntegerField(default=0, verbose_name="Order")  # Поле для сортировки
    is_active = models.BooleanField(default=True, verbose_name="Active")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")

    class Meta:
        verbose_name = "Slider Item"
        verbose_name_plural = "Slider Items"
        ordering = ['order']  # Сортировка по полю order

    def __str__(self):
        return self.title


from django.contrib import admin
from filer.fields.image import FilerImageField
from adminsortable2.admin import SortableAdminMixin
from .models import SliderItem
from easy_thumbnails.files import get_thumbnailer

class SliderItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'image_preview', 'order', 'is_active')
    list_filter = ('is_active',)
    fields = ('title', 'image', 'description', 'order', 'is_active')
    search_fields = ('title', 'description')
    ordering = ['order']

    def image_preview(self, obj):
        """
        Показываем превью изображения в списке.
        """
        if obj.image:
            thumbnail = get_thumbnailer(obj.image.file).get_thumbnail({'size': (100, 100), 'crop': True})
            return f'<img src="{thumbnail.url}" width="100" />'
        return "No Image"
    image_preview.allow_tags = True
    image_preview.short_description = "Image Preview"

admin.site.register(SliderItem, SliderItemAdmin)
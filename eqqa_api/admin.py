from django.contrib import admin
from .models import BusinessInfo, Product, GalleryItem, FAQ, WhyChooseReason


@admin.register(BusinessInfo)
class BusinessInfoAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "phone", "whatsapp", "location"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "price", "availability", "is_featured", "order"]
    list_editable = ["is_featured", "order"]


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ["caption", "category", "order"]
    list_editable = ["category", "order"]


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ["question", "order"]
    list_editable = ["order"]


@admin.register(WhyChooseReason)
class WhyChooseReasonAdmin(admin.ModelAdmin):
    list_display = ["title", "order"]
    list_editable = ["order"]

from pathlib import Path
from django.http import FileResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import BusinessInfo, Product, GalleryItem, FAQ, WhyChooseReason
from .serializers import (
    BusinessInfoSerializer,
    ProductSerializer,
    GalleryItemSerializer,
    FAQSerializer,
    WhyChooseReasonSerializer,
)


@api_view(["GET"])
def site_data(request):
    """Return all public site content in one endpoint for simplicity."""
    try:
        business = BusinessInfo.objects.first() or BusinessInfo()
    except BusinessInfo.DoesNotExist:
        business = BusinessInfo()

    context = {"request": request}
    data = {
        "business": BusinessInfoSerializer(business).data,
        "products": ProductSerializer(
            Product.objects.all(), many=True, context=context
        ).data,
        "featured_products": ProductSerializer(
            Product.objects.filter(is_featured=True), many=True, context=context
        ).data,
        "gallery": GalleryItemSerializer(
            GalleryItem.objects.all(), many=True, context=context
        ).data,
        "faqs": FAQSerializer(FAQ.objects.all(), many=True).data,
        "why_choose": WhyChooseReasonSerializer(
            WhyChooseReason.objects.all(), many=True
        ).data,
    }
    return Response(data)


def serve_react(request, path=""):
    """Serve the React index.html for all non-API routes."""
    dist_dir = Path(__file__).resolve().parent.parent / "frontend" / "dist"
    index_file = dist_dir / "index.html"
    return HttpResponse(index_file.read_text(), content_type="text/html")

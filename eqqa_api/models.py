from django.db import models


class BusinessInfo(models.Model):
    """Single-row model storing confirmed business details."""
    name = models.CharField(max_length=200, default="Eqqa Enterprise")
    category = models.CharField(max_length=200, default="[CONFIRM BUSINESS CATEGORY]")
    tagline = models.TextField(default="[CONFIRM TAGLINE]")
    description = models.TextField(default="[CONFIRM BUSINESS DESCRIPTION]")
    location = models.CharField(max_length=300, default="[CONFIRM LOCATION]")
    phone = models.CharField(max_length=50, default="[CONFIRM PHONE]")
    whatsapp = models.CharField(max_length=50, default="[CONFIRM WHATSAPP]")
    address = models.TextField(default="[CONFIRM ADDRESS]")
    email = models.EmailField(blank=True, default="[CONFIRM EMAIL]")
    social_facebook = models.URLField(blank=True, default="[CONFIRM FACEBOOK]")
    social_instagram = models.URLField(blank=True, default="[CONFIRM INSTAGRAM]")
    opening_hours = models.TextField(default="[CONFIRM OPENING HOURS]")
    years_in_business = models.CharField(max_length=50, default="[CONFIRM YEARS]")
    review_rating = models.CharField(max_length=10, default="[CONFIRM RATING]")
    primary_cta_label = models.CharField(max_length=100, default="Order on WhatsApp")
    primary_cta_link = models.URLField(default="https://wa.me/[CONFIRM_WHATSAPP_NUMBER]")

    class Meta:
        verbose_name = "Business Info"
        verbose_name_plural = "Business Info"

    def __str__(self):
        return self.name


class Product(models.Model):
    """Core kuih / snack offerings."""
    name = models.CharField(max_length=200)
    description = models.TextField()
    benefit = models.TextField(help_text="Key customer benefit")
    price = models.CharField(max_length=100, blank=True, default="[CONFIRM PRICE]")
    options = models.TextField(blank=True, help_text="Flavours, sizes, variants")
    availability = models.CharField(max_length=200, blank=True, default="[CONFIRM AVAILABILITY]")
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.name


class GalleryItem(models.Model):
    """Real business photos for the gallery and homepage."""
    CAPTION_CHOICES = [
        ("product", "Product"),
        ("store", "Store / Location"),
        ("behind_the_scenes", "Behind the Scenes"),
        ("event", "Event / Customer"),
    ]
    caption = models.CharField(max_length=200, blank=True, default="[CONFIRM CAPTION]")
    category = models.CharField(max_length=30, choices=CAPTION_CHOICES, default="product")
    image = models.ImageField(upload_to="gallery/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.caption or f"Gallery item {self.id}"


class FAQ(models.Model):
    """Customer questions and confirmed answers."""
    question = models.CharField(max_length=300)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question


class WhyChooseReason(models.Model):
    """Short reasons customers choose the business."""
    title = models.CharField(max_length=200)
    explanation = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title

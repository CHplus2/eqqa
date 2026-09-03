from django.db import models


class BusinessInfo(models.Model):
    """Single-row model storing confirmed business details."""
    name = models.CharField(max_length=200, default="Eqqa Enterprise")
    category = models.CharField(max_length=200, default="Kuih & Snacks")
    tagline = models.TextField(default="[TO BE CONFIRMED]")
    description = models.TextField(default="[TO BE CONFIRMED]")
    location = models.CharField(max_length=300, default="Sibu, Sarawak")
    phone = models.CharField(max_length=50, default="011-1408 0050")
    phone_secondary = models.CharField(max_length=50, blank=True, default="013-566 9234")
    whatsapp = models.CharField(max_length=50, default="[TO BE CONFIRMED: primary WhatsApp number]")
    address = models.TextField(default="[TO BE CONFIRMED]")
    email = models.EmailField(blank=True, default="[TO BE CONFIRMED]")
    social_facebook = models.URLField(blank=True, default="[TO BE CONFIRMED]")
    facebook_name = models.CharField(max_length=200, blank=True, default="Erica Sandra")
    social_tiktok = models.URLField(blank=True, default="[TO BE CONFIRMED]")
    tiktok_name = models.CharField(max_length=200, blank=True, default="Eqqa Enterprise")
    social_instagram = models.URLField(blank=True, default="[TO BE CONFIRMED]")
    opening_hours = models.TextField(default="[TO BE CONFIRMED]")
    years_in_business = models.CharField(max_length=50, default="[TO BE CONFIRMED]")
    review_rating = models.CharField(max_length=10, default="[TO BE CONFIRMED]")
    target_customers = models.CharField(
        max_length=300, blank=True,
        default="Adults, children, families, and groups of friends",
    )
    ordering_channels = models.CharField(
        max_length=300, blank=True, default="WhatsApp, TikTok, and events",
    )
    delivery_methods = models.CharField(
        max_length=300, blank=True,
        default="Self-delivery, runner, or delivery by bus",
    )
    claim_1 = models.CharField(max_length=200, blank=True, default="100% fresh ingredients")
    claim_2 = models.CharField(max_length=200, blank=True, default="No preservatives")
    achievement = models.CharField(
        max_length=300, blank=True,
        default="Champion, Kuih Cap competition (Sarawak district level), Wellbest Carnival 2025",
    )
    primary_cta_label = models.CharField(max_length=100, default="Order on WhatsApp")
    primary_cta_link = models.URLField(default="https://wa.me/[TO BE CONFIRMED]")

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

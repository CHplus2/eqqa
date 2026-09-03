# Data migration: replace placeholder content with confirmed business information
# from beneficiary interview. Anything not confirmed remains [TO BE CONFIRMED].

from django.db import migrations


def load_confirmed_data(apps, schema_editor):
    BusinessInfo = apps.get_model("eqqa_api", "BusinessInfo")
    Product = apps.get_model("eqqa_api", "Product")
    GalleryItem = apps.get_model("eqqa_api", "GalleryItem")
    FAQ = apps.get_model("eqqa_api", "FAQ")
    WhyChooseReason = apps.get_model("eqqa_api", "WhyChooseReason")

    # --- Business info (confirmed unless marked otherwise) ---
    info = BusinessInfo.objects.first()
    if info is None:
        info = BusinessInfo()
    info.name = "Eqqa Enterprise"
    info.category = "Kuih & Snacks"
    info.tagline = "Authentic traditional kuih and snacks, handmade in Sibu, Sarawak."
    info.description = (
        "Eqqa Enterprise is a local business from Sibu, Sarawak offering "
        "authentic traditional kuih and snacks. Our products are handmade "
        "with 100% fresh ingredients, contain no preservatives, and are made "
        "carefully with attention to customer satisfaction at affordable prices."
    )
    info.location = "Sibu, Sarawak"
    info.phone = "011-1408 0050"
    info.phone_secondary = "013-566 9234"
    info.whatsapp = "[TO BE CONFIRMED: which phone number is the primary WhatsApp ordering number]"
    info.address = "[TO BE CONFIRMED]"
    info.email = "[TO BE CONFIRMED]"
    info.social_facebook = "[TO BE CONFIRMED]"
    info.facebook_name = "Erica Sandra"
    info.social_tiktok = "[TO BE CONFIRMED]"
    info.tiktok_name = "Eqqa Enterprise"
    info.social_instagram = "[TO BE CONFIRMED]"
    info.opening_hours = "[TO BE CONFIRMED]"
    info.years_in_business = "[TO BE CONFIRMED]"
    info.review_rating = "[TO BE CONFIRMED]"
    info.target_customers = "Adults, children, families, and groups of friends"
    info.ordering_channels = "WhatsApp, TikTok, and events"
    info.delivery_methods = "Self-delivery, runner, or delivery by bus"
    info.claim_1 = "100% fresh ingredients"
    info.claim_2 = "No preservatives"
    info.achievement = "Champion, Kuih Cap competition (Sarawak district level), Wellbest Carnival 2025"
    info.primary_cta_label = "Order on WhatsApp"
    info.primary_cta_link = "https://wa.me/[TO BE CONFIRMED]"
    info.save()

    # --- Products (confirmed names and prices; unit per package [TO BE CONFIRMED]) ---
    Product.objects.all().delete()
    products = [
        ("Kuih Cuan", "RM25", 1),
        ("Kuih Jala", "RM25", 2),
        ("Kacang Pedas Manis", "RM10", 3),
        ("Kerepek Pisang Panggang", "RM25", 4),
        ("Kerepek Ubi Panggang", "RM25", 5),
        ("Kuih Meruku", "RM15", 6),
    ]
    for name, price, order in products:
        Product.objects.create(
            name=name,
            description=(
                "Handmade with 100% fresh ingredients and no preservatives. "
                "[TO BE CONFIRMED: product-specific description]"
            ),
            benefit="Authentic traditional taste",
            price=price,
            options="[TO BE CONFIRMED: price unit (per package / container)]",
            availability="[TO BE CONFIRMED: whether available all the time]",
            is_featured=True,
            order=order,
        )

    # --- Gallery placeholders (real photos needed) ---
    GalleryItem.objects.all().delete()
    gallery = [
        ("[REAL PHOTO NEEDED] Kuih Jala", "product", 1),
        ("[REAL PHOTO NEEDED] Kuih Cuan", "product", 2),
        ("[REAL PHOTO NEEDED] Kerepek Pisang Panggang", "product", 3),
        ("[REAL PHOTO NEEDED] Kuih Meruku", "product", 4),
        ("[REAL PHOTO NEEDED] Behind the scenes (handmade preparation)", "behind_the_scenes", 5),
        ("[REAL PHOTO NEEDED] Event / Wellbest Carnival 2025", "event", 6),
    ]
    for caption, category, order in gallery:
        GalleryItem.objects.create(caption=caption, category=category, order=order)

    # --- FAQs (confirmed answers; unconfirmed marked) ---
    FAQ.objects.all().delete()
    faqs = [
        (
            "What products do you sell?",
            "Kuih Cuan (RM25), Kuih Jala (RM25), Kacang Pedas Manis (RM10), "
            "Kerepek Pisang Panggang (RM25), Kerepek Ubi Panggang (RM25), and "
            "Kuih Meruku (RM15). [TO BE CONFIRMED: whether prices are per package or container]",
        ),
        (
            "Where are you located?",
            "We are based in Sibu, Sarawak. [TO BE CONFIRMED: exact business address]",
        ),
        (
            "How do I place an order?",
            "You can order through WhatsApp or TikTok, or find us at events. "
            "[TO BE CONFIRMED: primary WhatsApp ordering number]",
        ),
        (
            "Do you provide delivery?",
            "Yes. We offer self-delivery, runner service, and delivery by bus. "
            "[TO BE CONFIRMED: delivery areas and delivery fees]",
        ),
        (
            "Are your products fresh?",
            "Yes. Our products are handmade with 100% fresh ingredients and "
            "contain no preservatives.",
        ),
        (
            "What are your opening hours?",
            "[TO BE CONFIRMED]",
        ),
        (
            "What payment methods are accepted?",
            "[TO BE CONFIRMED]",
        ),
        (
            "Is the product halal?",
            "[TO BE CONFIRMED]",
        ),
    ]
    for order, (question, answer) in enumerate(faqs, start=1):
        FAQ.objects.create(question=question, answer=answer, order=order)

    # --- Why choose us (confirmed selling points) ---
    WhyChooseReason.objects.all().delete()
    reasons = [
        (
            "Authentic traditional taste",
            "Traditional kuih and snacks made the authentic way, true to their Sarawak roots.",
        ),
        (
            "Handmade",
            "Every product is handmade with care and attention to customer satisfaction.",
        ),
        (
            "100% fresh ingredients",
            "We use only fresh ingredients, with no preservatives in any of our products.",
        ),
        (
            "Affordable pricing",
            "Quality traditional snacks at prices that are friendly for families and groups.",
        ),
    ]
    for order, (title, explanation) in enumerate(reasons, start=1):
        WhyChooseReason.objects.create(title=title, explanation=explanation, order=order)


def reverse_data(apps, schema_editor):
    # Reversing would mean restoring placeholders; not supported intentionally.
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('eqqa_api', '0003_businessinfo_achievement_businessinfo_claim_1_and_more'),
    ]

    operations = [
        migrations.RunPython(load_confirmed_data, reverse_data),
    ]

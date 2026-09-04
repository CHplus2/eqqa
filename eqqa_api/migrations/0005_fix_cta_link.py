# Data migration: point the primary CTA at the Contact page while the
# primary WhatsApp number remains [TO BE CONFIRMED], so the CTA never
# leads to a broken wa.me URL.

from django.db import migrations


def fix_cta_link(apps, schema_editor):
    BusinessInfo = apps.get_model("eqqa_api", "BusinessInfo")
    info = BusinessInfo.objects.first()
    if info and "[" in (info.primary_cta_link or ""):
        info.primary_cta_link = "/contact"
        info.save()


class Migration(migrations.Migration):

    dependencies = [
        ('eqqa_api', '0004_confirmed_business_data'),
    ]

    operations = [
        migrations.RunPython(fix_cta_link, migrations.RunPython.noop),
    ]

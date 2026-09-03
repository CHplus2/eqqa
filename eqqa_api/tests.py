from django.test import TestCase
from django.urls import reverse


class SiteDataAPITests(TestCase):
    def test_site_data_returns_expected_keys(self):
        response = self.client.get(reverse("site_data"))
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("business", data)
        self.assertIn("products", data)
        self.assertIn("gallery", data)
        self.assertIn("faqs", data)
        self.assertIn("why_choose", data)
        self.assertEqual(data["business"]["name"], "Eqqa Enterprise")

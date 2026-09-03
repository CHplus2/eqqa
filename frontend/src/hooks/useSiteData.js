import { useState, useEffect } from "react";
import {
  fallbackBusiness,
  fallbackProducts,
  fallbackGallery,
  fallbackFAQs,
  fallbackWhyChoose,
} from "../data/fallbackData";

const API_URL = "http://127.0.0.1:8000/api/site-data/";

export function useSiteData() {
  const [data, setData] = useState({
    business: fallbackBusiness,
    products: fallbackProducts,
    featured_products: fallbackProducts,
    gallery: fallbackGallery,
    faqs: fallbackFAQs,
    why_choose: fallbackWhyChoose,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const json = await response.json();
        if (!cancelled) {
          setData({
            business: json.business || fallbackBusiness,
            products: json.products || fallbackProducts,
            featured_products: json.featured_products || json.products || fallbackProducts,
            gallery: json.gallery || fallbackGallery,
            faqs: json.faqs || fallbackFAQs,
            why_choose: json.why_choose || fallbackWhyChoose,
          });
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}

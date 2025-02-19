// Сам компонент
import PropTypes from "prop-types";

export const ProductSchema = ({ product = {} }) => {
  const productData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name || "R36S Game Console",
    description: `Портативна ігрова консоль з підтримкою ${
      product.platforms?.join(", ") || "PSP, PSX, N64, NDS"
    } та інших ретро платформ`,

    // Brand information
    brand: {
      "@type": "Brand",
      name: "R36S",
    },

    // Main characteristics
    model: "R36S",
    category: "Electronics > Video Game Consoles",
    productID: "R36S-2024",

    // Product images
    image: product.media?.images?.additional || [
      "/images/r36s-front.webp",
      "/images/r36s-back.webp",
      "/images/r36s-side.webp",
    ],

    // Features
    features: product.features || [
      "5.5-дюймовий IPS екран",
      "Роздільна здатність 1280x720",
      "Акумулятор 4000 mAh",
      "WiFi та Bluetooth підтримка",
      "Мультиплеєр",
    ],

    // Technical specifications
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Screen Size",
        value: product.technicalSpecs?.display?.size || "5.5 inches",
      },
      {
        "@type": "PropertyValue",
        name: "Resolution",
        value: product.technicalSpecs?.display?.resolution || "1280x720",
      },
      {
        "@type": "PropertyValue",
        name: "Battery",
        value: product.technicalSpecs?.battery?.capacity || "4000 mAh",
      },
      {
        "@type": "PropertyValue",
        name: "Storage",
        value: product.technicalSpecs?.storage?.internal || "64GB",
      },
      {
        "@type": "PropertyValue",
        name: "RAM",
        value: product.technicalSpecs?.processor?.ram || "4GB LPDDR4",
      },
    ],

    // Price and availability information
    offers: {
      "@type": "Offer",
      price: product.price?.toFixed(2) || "2999.00",
      priceCurrency: product.currency || "UAH",
      priceValidUntil: "2025-12-31",
      availability:
        product.status?.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "R36S Official Store",
      },
      // Shipping details
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "UAH",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          },
          cutOffTime: "17:00:00",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "1",
            unitCode: "DAY",
          },
        },
      },
    },

    // Ratings and reviews
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.ratings?.average || "4.8",
      reviewCount: product.ratings?.total || "149",
      bestRating: "5",
      worstRating: "1",
    },

    // Warranty information
    warranty: {
      "@type": "WarrantyPromise",
      durationOfWarranty: {
        "@type": "QuantitativeValue",
        value: product.warranty?.duration || "12",
        unitCode: product.warranty?.unit || "MON",
      },
      description:
        product.warranty?.description || "12 місяців офіційної гарантії",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData, null, 2) }}
    />
  );
};

ProductSchema.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    platforms: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    technicalSpecs: PropTypes.shape({
      display: PropTypes.shape({
        size: PropTypes.string,
        type: PropTypes.string,
        resolution: PropTypes.string,
      }),
      processor: PropTypes.shape({
        cpu: PropTypes.string,
        gpu: PropTypes.string,
        ram: PropTypes.string,
      }),
      storage: PropTypes.shape({
        internal: PropTypes.string,
        expandable: PropTypes.string,
      }),
      battery: PropTypes.shape({
        capacity: PropTypes.string,
        playTime: PropTypes.string,
      }),
    }),
    media: PropTypes.shape({
      images: PropTypes.shape({
        main: PropTypes.string,
        additional: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    warranty: PropTypes.shape({
      duration: PropTypes.string,
      unit: PropTypes.string,
      description: PropTypes.string,
    }),
    ratings: PropTypes.shape({
      average: PropTypes.number,
      total: PropTypes.number,
    }),
    status: PropTypes.shape({
      availability: PropTypes.string,
      quantity: PropTypes.number,
    }),
  }),
};

ProductSchema.defaultProps = {
  product: {
    name: "R36S Game Console",
    price: 2999.0,
    currency: "UAH",
    platforms: ["PSP", "PSX", "N64", "NDS"],
    features: [
      "5.5-дюймовий IPS екран",
      "Роздільна здатність 1280x720",
      "Акумулятор 4000 mAh",
      "WiFi та Bluetooth підтримка",
      "Мультиплеєр",
    ],
  },
};

export default ProductSchema;

import type { Rule as ValidationRule } from "sanity";
const products = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    // Basic Information
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (Rule: ValidationRule) =>
        Rule.required()
          .min(3)
          .max(100)
          .error(
            "Product name is required and should be between 3-100 characters."
          ),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 100,
      },
      validation: (Rule: ValidationRule) =>
        Rule.required().error("Slug is required."),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: ValidationRule) =>
        Rule.required()
          .min(50)
          .max(1000)
          .error("Description should be between 50-1000 characters."),
    },
    // Categories and Tags
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }], // Assumes you have a separate category schema
      validation: (Rule: ValidationRule) =>
        Rule.required().error("Category is required."),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },

    // Inventory
    {
      name: "sku",
      title: "SKU",
      type: "string",
      validation: (Rule: ValidationRule) =>
        Rule.required().error("SKU is required."),
    },

    // Product Variants (e.g., size, color)
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "variantName",
              title: "Variant Name (e.g., Size, Color)",
              type: "string",
              validation: (Rule: ValidationRule) =>
                Rule.required().error("Variant name is required."),
            },
            {
              name: "variantValue",
              title: "Variant Value (e.g., Small, Red)",
              type: "string",
              validation: (Rule: ValidationRule) =>
                Rule.required().error("Variant value is required."),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule: ValidationRule) =>
                Rule.positive().error(
                  "Price must be a positive number."
                ),
            },
             {
              name: "discoutPrice",
              title: "Discount Price",
              type: "number",
              validation: (Rule: ValidationRule) =>
                Rule.positive().error(
                  "Discount price must be a positive number."
                ),
            },
            {
              name: "stock",
              title: "Variant Stock",
              type: "number",
              validation: (Rule: ValidationRule) =>
                Rule.integer()
                  .min(0)
                  .error("Stock must be a non-negative integer."),
            },
            {
              name: "images",
              title: "Variant Images",
              type: "array",
              of: [
                {
                  type: "image",
                  fields: [
                    {
                      name: "altText",
                      title: "Alt Text",
                      type: "string",
                      validation: (Rule: ValidationRule) =>
                        Rule.required().error(
                          "Alt text is required for accessibility."
                        ),
                    },
                  ],
                },
              ],
              validation: (Rule: ValidationRule) =>
                Rule.min(1).error(
                  "At least one image is required for each variant."
                ),
            },
          ],
          preview: {
            select: {
              title: "variantValue",
              subtitle: "variantName",
              media: "images.0",
            },
          },
        },
      ],
    },

    // SEO Fields
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule: ValidationRule) =>
            Rule.max(60).warning(
              "Meta title should be under 60 characters for SEO."
            ),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          validation: (Rule: ValidationRule) =>
            Rule.max(160).warning(
              "Meta description should be under 160 characters for SEO."
            ),
        },
      ],
    },

    // Additional Information
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: ValidationRule) =>
        Rule.required().error("Publish date is required."),
    },
  ],

  // Preview in Sanity Studio
  preview: {
    select: {
      title: "productName",
      subtitle: "category.title",
      media: "images.0",
    },
  },
};

export default products;

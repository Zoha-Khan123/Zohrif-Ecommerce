import type { Rule as ValidationRule } from "sanity";

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    // 1. Order Information
    {
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required().error('Order number is required.'),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule: ValidationRule) => Rule.required().error('Order date is required.'),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
      },
    },

    // 2. Customer Information
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'user' }], // Assumes a separate customer schema
      validation: (Rule: ValidationRule) => Rule.required().error('User is required.'),
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required()
          .email()
          .error('A valid email is required.'),
    },
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required().error('Customer name is required.'),
    },
{
  name:'cuntomerPhone',
  title:'Customer Phone',
  type:'string',
  validation: (Rule: ValidationRule) => Rule.required().error('Customer phone number is required.'),
},
    // 3. Shipping Information
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        {
          name: 'fullName',
          title: 'Full Name',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('Full name is required.'),
        },
        {
          name: 'addressLine1',
          title: 'Address Line 1',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('Address line 1 is required.'),
        },
        {
          name: 'addressLine2',
          title: 'Address Line 2',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('City is required.'),
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('State is required.'),
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('Postal code is required.'),
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule: ValidationRule) => Rule.required().error('Country is required.'),
        },
      ],
    },

    // 4. Order Items
    {
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }], // References the product schema
              validation: (Rule: ValidationRule) => Rule.required().error('Product is required.'),
            },
            {
              name: 'variant',
              title: 'Variant',
              type: 'reference',
              to: [{ type: 'product.variants' }], // References the variant schema
              fields: [
                {
                  name: 'variantName',
                  title: 'Variant Name (e.g., Size, Color)',
                  type: 'string',
                  validation: (Rule: ValidationRule) => Rule.required().error('Variant name is required.'),
                },
                {
                  name: 'variantValue',
                  title: 'Variant Value (e.g., Small, Red)',
                  type: 'string',
                  validation: (Rule: ValidationRule) => Rule.required().error('Variant value is required.'),
                },
              ],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule: ValidationRule) => Rule.required().integer().min(1).error('Quantity must be at least 1.'),
            },
            {
              name: 'unitPrice',
              title: 'Unit Price',
              type: 'number',
              validation: (Rule: ValidationRule) => Rule.required().positive().error('Unit price must be a positive number.'),
            },
            {
              name: 'totalPrice',
              title: 'Total Price',
              type: 'number',
              validation: (Rule: ValidationRule) => Rule.required().positive().error('Total price must be a positive number.'),
            },
          ],
          preview: {
            select: {
              productName: 'product.productName',
              variant: 'variant.variantValue',
              quantity: 'quantity',
            },
            prepare({
              productName,
              variant,
              quantity,
            }: {
              productName?: string;
              variant?: string;
              quantity?: number;
            }) {
              return {
                title: productName || 'No product',
                subtitle: variant ? `${variant} (Qty: ${quantity})` : `Qty: ${quantity}`,
              };
            },
          },
        },
      ],
      validation: (Rule: ValidationRule) => Rule.required().min(1).error('At least one item is required.'),
    },

    // 5. Pricing Summary
    {
      name: 'subtotal',
      title: 'Subtotal',
      type: 'number',
      validation: (Rule: ValidationRule) => Rule.required().positive().error('Subtotal must be a positive number.'),
    },
    {
      name: 'shippingCost',
      title: 'Shipping Cost',
      type: 'number',
      validation: (Rule: ValidationRule) => Rule.required().min(0).error('Shipping cost must be a non-negative number.'),
    },
    {
      name: 'tax',
      title: 'Tax',
      type: 'number',
      validation: (Rule: ValidationRule) => Rule.required().min(0).error('Tax must be a non-negative number.'),
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: (Rule: ValidationRule) => Rule.required().positive().error('Total must be a positive number.'),
    },

    // 6. Payment Information
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Credit Card', value: 'credit_card' },
          { title: 'PayPal', value: 'paypal' },
          { title: 'Cash on Delivery', value: 'cod' },
          { title: 'Bank Transfer', value: 'bank_transfer' },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required().error('Payment method is required.'),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Completed', value: 'completed' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required().error('Payment status is required.'),
      initialValue: 'pending',
    },

    // 7. Order Status
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required().error('Order status is required.'),
      initialValue: 'pending',
    },

    // 8. Additional Information
    {
      name: 'notes',
      title: 'Customer Notes',
      type: 'text',
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
    },
    {
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
      },
    },
  ],

  preview: {
    select: {
      title: 'orderNumber',
      subtitle: 'customerName',
      status: 'orderStatus',
    },
    prepare({
      title,
      subtitle,
      status,
    }: {
      title?: string;
      subtitle?: string;
      status?: string;
    }) {
      return {
        title: `Order #${title}`,
        subtitle: `${subtitle} - ${status}`,
      };
    },
  },
};
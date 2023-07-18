"use strict";
const stripe = require("stripe")(process.env.SECRETKEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// All this is more or less boilerplate code taken and dapted from the Stripe - integration with Strapi documentation
// See the last part of this video, for a quick reference: https://www.youtube.com/watch?v=EBCdyQ_HFMo&list=PL9ZrwTG1hpefcS2jbi9BwveOLtDf3FGgv&index=6&t=13881s&ab_channel=EdRoh
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {

      // retrieve item information
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          };
        })
      );
      console.log(process.env.REACT_APP_SERVER_LINK + "/CheckoutSuc")
      //create a stripe session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: process.env.REACT_APP_SERVER_LINK + "/CheckoutSuc",
        cancel_url: process.env.REACT_APP_SERVER_LINK + "/checkout",
        line_items: lineItems,
      });

      //create the item
      await strapi.service("api::order.order").create({
        data: { userName, products, stripeSessoinId: session.id },
      });

      //return the session id
      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the charge" } };
    }
  },
}));

'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
/*
  '0 * * * * *': async() => {
   try {
    strapi.log.info("Sending email...")
    await strapi.plugins['email'].services.email.send({
      to: 'victorkane@gmail.com',
      from: 'victorkane@awebfactory.com',
      replyTo: 'victorkane@awebfactory.com',
      subject: 'Hi from Strapi awfdev',
      text: 'Hello world!',
      html: '<h3>Hello world</h3>',
    })
    strapi.log.info("Email sent...")
  } catch(error) {
    strapi.log.info("err", error)
  }
 }
*/
};

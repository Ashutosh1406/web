const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_TRACKING_ID!

export const pageview = (url: URL): void => {
	// window.gtag("config", GA_TRACKING_ID, {
	// 	page_path: url
	// })

	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("config", GA_TRACKING_ID, {
		  page_path: url
		});
	  } else {
		console.error("Google Analytics not initialized.");
	  }


};

type GTagEvent = {
	action: string
	category: string
	label: string
	value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }: GTagEvent): void => {
	
// 	window.gtag("event", action, {
// 		event_category: category,
// 		event_label: label,
// 		value
// 	})
// }


export const event = ({ action, category, label, value }: GTagEvent): void => {
	if (typeof window !== "undefined" && window.gtag) {
	  window.gtag("event", action, {
		event_category: category,
		event_label: label,
		value
	  });
	} else {
	  console.error("Google Analytics not initialized.");
	}
  };


browser.runtime.onInstalled.addListener(r =>{
	if(r.reason == 'install'){
		browser.tabs.create({
			url: 'allow_access_myges_data.html'
		})
	}
})
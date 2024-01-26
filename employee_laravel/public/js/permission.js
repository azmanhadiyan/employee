function showNotification(){
	const notification=new Notification("New message from me!",{
		body: "Hey mate, how are ya?"
	});
}
console.log(Notification.permission);
    if(Notification.permission==="grented"){
        showNotification();
    }else if(Notification.permission!=='denied'){
        Notification.requestPermission().then(permission=>{
            if(permission === "granted"){
            	showNotification();
            }
        });
    }
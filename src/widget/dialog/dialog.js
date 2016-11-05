function dialog() {
	let dialog = aimee.$('.dialog').remodal();
	dialog.update = function(app){
		this.$modal.html(app);
		return this;
	}
	return dialog;
}

export default dialog()
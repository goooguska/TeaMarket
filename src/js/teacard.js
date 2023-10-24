const template = document.createElement('template');
template.innerHTML= `
<style>
.tea-card{
	text-decoration:none;
	display:block;
	width:215px;
	padding:15px 20px;
}
p{
	color: #303030;
	
}

}

</style>
	<a href='' class="tea-card">
	<img id='tea'/>
	<img id='rating'/>
	<p id='name'></p>
	<p id='price'></p>
	<p id='weight'></p>

	</a>

`
class teaCard extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.getElementById('name').innerText = this.getAttribute('name');
		this.shadowRoot.getElementById('tea').src = this.getAttribute('image');
		this.shadowRoot.getElementById('rating').src = this.getAttribute('rating');
		this.shadowRoot.getElementById('price').innerText = this.getAttribute('price');
		this.shadowRoot.getElementById('weight').innerText = this.getAttribute('weight');


	}
}
window.customElements.define('tea-card',teaCard)


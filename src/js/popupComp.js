const popup = document.createElement('popup');
popup.innerHTML= `
<style>
.more-popup{
	position: fixed;
	top: 0%;
	left: 0%;
	background-color: rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 100%;
	z-index: 5;
}
.more-popup-card{
	max-width: 459px;
	border-radius: 14px;
	padding: 10px 39px;
	background-color: #fff;
	margin: auto;
	margin-top: 15%;
	text-align: center;
}
span{
	background-color: #46c578;
	border-radius: 14px;
	padding: 12px 27px;
	display: inline-block;
	font-size:18px;
	font-weight:600;
	color:#fff;

}
img{
	width: 24px;
	height: 24px;
}
p{
	font-size:16px;
	font-weight:600;
	color:#303030;

}
@media (max-width: 768px){
	span{
		font-size:14px;
		font-weight:600;
	}
	p{
		font-size:12px;
		font-weight:600;
	}


}
@media (max-width: 576px){
	span{
		font-size:10px;
		font-weight:600;
		
	}
	p{
		font-size:10px;
		font-weight:600;
	}
	img{
		width: 17px;
		height: 17px;
	}
	.more-popup-card{
		margin:5% ;
	}

}

</style>
<div class="more-popup">
	<div class="more-popup-card">
	<span id='title'> </span>
	<img id='close'/>
	<p id='text'></p>
	</div>
</div>`;

class morePopup extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(popup.cloneNode(true));
		this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
		this.shadowRoot.getElementById('close').src = this.getAttribute('close');
		this.shadowRoot.getElementById('text').innerText = this.getAttribute('text');

		const closeButton = this.shadowRoot.getElementById('close')
		closeButton.onclick = () =>{
			none.style.display= 'none'
		}
		
	}
	

}

window.customElements.define('more-popup',morePopup);

const none = document.querySelector('.none')
const moreButtonOpen = document.querySelector('.teafind__content-sidebar-more')
moreButtonOpen.onclick = () =>{
	none.style.display= 'block'
}


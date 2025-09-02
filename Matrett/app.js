const form = document.getElementById("inputs-form");
const container = document.getElementById("container");
const messageContainer = document.getElementById("message-container");

form.addEventListener("submit", handleSubmit);

function formatName(name) {
	return name[0].toUpperCase() + name.slice(1, name.length);
}

function generateFoodMessage(name, personality) {
	// OBS: Meldingene er muligens generert av AI... :-)
	const messages = {
		gladfis: [
			`${name}, du er definitivt en regnbuekake! 🌈 Fargerik, søt og sprer glede overalt du går!`,
			`${name}, du er som pannekaker på søndagsmorgen - varmer hjertet og får alle til å smile! 🥞`,
			`${name}, du er bubble tea! Søt, sprudlende og alltid full av overraskelser! 🧋`,
			`${name}, du er som en perfekt pizza - deler glede med alle rundt deg! 🍕`,
		],

		sinna: [
			`${name}, du er chili! 🌶️ Hot, krydret og ikke til å kimse av!`,
			`${name}, du er en espresso - sterk, intens og våkner opp alle i nærheten! ☕`,
			`${name}, du er surdeig - tar tid å bli kjent med, men verdt ventetiden! 🍞`,
			`${name}, du er wasabi - liten dose, stor effekt! 💥`,
		],

		mystisk: [
			`${name}, du er som en french onion soup - mange lag å utforske! 🧅`,
			`${name}, du er mørk sjokolade - sofistikert og ikke alle forstår deg med en gang 🍫`,
			`${name}, du er som en hemmelighetsoppskrift - alle vil vite mer! 🔮`,
			`${name}, du er røykt laks - eksklusiv og ikke alle får sjansen til å oppleve deg! 🐟`,
		],

		irriterende: [
			`${name}, du er koriander - folk enten elsker eller hater deg, ingen mellomting! 🌿`,
			`${name}, du er durian-frukt - kontroversielt, men de som liker deg - de elsker deg! 🍈`,
			`${name}, du er lakris - nordisk, spesiell og definitivt ikke for alle! 🖤`,
			`${name}, du er som en sandwich med syltetøy OG majones - folk skjønner det ikke, men det funker! 🥪`,
		],

		søtnos: [
			`${name}, du er cupcakes! 🧁 Liten, søt og gjør hverdagen litt bedre!`,
			`${name}, du er som varm kakao med marshmallows - ren hygge! ☕`,
			`${name}, du er jordbær med krem - klassisk søt og alle elsker deg! 🍓`,
			`${name}, du er kanelboller - dufter herlig og varmer hjertet! 🥐`,
		],
	};

	const personalityMessages = messages[personality];
	const randNum = Math.floor(Math.random() * personalityMessages.length);

	return personalityMessages[randNum];
}

function handleSubmit(e) {
	e.preventDefault();
	console.log("Form submitted...");

	const form = e.target;
	const name = formatName(form.name.value.toLowerCase());
	const personality = form.personality.value;

	console.log(generateFoodMessage(name, personality));
	messageContainer.innerHTML = /* HTML */ ` <p>${generateFoodMessage(name, personality)}</p> `;
}

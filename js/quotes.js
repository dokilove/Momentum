const quotes = [
    {
        quote: "모스키토 다이빙 투 베일파이어",
        meaning :"'모닥불에 뛰어드는 모기' 라는 뜻으로 스스로 파멸하는 길에 들어온 꼴을 조롱하는 의미다.",
    },
    {
        quote: "원숭이 다이브",
        meaning :"원숭이도 나무에서 떨어지는 날이 있다. 해커도 살다보면 오타를 내는 날이 있다.",
    },
    {
        quote: "앞문의 타이거, 뒷문의 버팔로",
        meaning :"미야모토 마사시의 코토와자이지만 타케다 신겐의 병법서에 쓰여있다고 한다. 진퇴양난의 상황을 나타내는 코토와자.",
    },
    {
        quote: "타임 이즈 머니",
        meaning :"시간이 금이다. 작중 사라리맨들과 비지니스맨들이 입에 달고 사는 말. '시간이 약이다'같은 의미로도 간혹 사용된다.",
    },
    {
        quote: "붓다에 선문답",
        meaning :"번데기 앞에서 주름잡는다",
    },
    {
        quote: "도토리 컴페티션",
        meaning :"도토리 키재기",
    },
    {
        quote: "타이거 퀘스트 던전",
        meaning :"호랑이 굴에 들어가야 호랑이를 잡는다",
    },
    {
        quote: "다반 인시던트",
        meaning :"일상다반사",
    },
    {
        quote: "새옹 호스",
        meaning :"새옹지마",
    },
    {
        quote: "5마일 앞까지 안개",
        meaning :"오리무중",
    },
    {
        quote: "고양이에게 코베인",
        meaning :"'돼지 목에 진주 목걸이'. 에도시대 귀족들이 쓰던 코토와자로, 최상급의 조소를 의미한다",
    },
    {
        quote: "트레져 에브리 미팅",
        meaning :"'모든 만남은 보물이다'라는 일기일회의 사상을 의미",
    },
    {
        quote: "투 래빗츠 노 래빗",
        meaning :"두 마리 토끼를 쫓다 둘 다 놓친다",
    },
    {
        quote: "도둑질이 발각되면 집에 불을 질러라",
        meaning :"'부정이나 비밀이 발각되면 끝까지 밀어붙여라', '독을 먹게되면 접시까지' 같은 뉘앙스로 해석.",
    },
    {
        quote: "우물속의 어둠을 너무 들여다 보면 떨어진다",
        meaning :"니체의 '심연을 들여다 보면 심연도 너를 들여다본다'의 미야모토 마사시 판 메이크 업.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const meaning = document.querySelector("#quote span:last-child");

 const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
 quote.innerText = todaysQuote.quote;
 meaning.innerText = todaysQuote.meaning;
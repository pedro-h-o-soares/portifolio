function showCard(cards, i) {
  $(cards[i]).addClass('show');
  if (i < cards.length) {
    setTimeout(() => showCard(cards, i+1), config.animationTimeoutMs);
  }
}

function showCards(shuffle) {
  let cards = $('.card');
  if (shuffle) {
    cards = _.shuffle(cards);
  }
  showCard(cards, 0);
}

function hidePopups(popup) {
  popup = popup ?? $('.popup.show');
  popup.addClass('hiding');
  setTimeout(() => popup.removeClass('hiding').removeClass('show'), 300);
}

function bindPopupActions() {
  $('.action__book-call').on('click', function () {
    $('.popup__book-call').addClass('show');
  });

  $('.popup__content').on('click', function (e) {
    e.stopPropagation();
  });

  $('.popup').on('click', function () {
    hidePopups();
  });

  $('.popup__close').on('click', function () {
    const popup = $(this).parent('.popup');
    hidePopups(popup);
  });
}

function updateCurrentJob() {
  const date = config.lastJobStartingDate;

  $('.current-job-status').html(config.jobStatus);
  $('.current-job-start').html(`Since ${moment(date).format('MMM/YYYY')}`)
}

(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ut5aer4tam");

$(document).ready(function () {
  const anchor = window.location.hash;
  $(anchor).addClass('anchor');

  // showCards(false);

  bindPopupActions();

  updateCurrentJob();
});

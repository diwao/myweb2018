import $ from 'jquery';

export default ($elm, duration = 100) => {
  return $elm.find('.js-delay-anime').each(function(i){
    setTimeout(function(){
      $(this).addClass('js-show');
    }.bind(this), duration * i);
    // console.log(i);
  });
};

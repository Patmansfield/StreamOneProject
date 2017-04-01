describe('Testing Routes', function () {

beforeEach(module('StreamOneProject'));

it('Should test routes',
inject(function ($route) {

  expect($route.routes['/'].controller).toBe('HomeController');
  expect($route.routes['/'].templateUrl).toEqual('templates/home.html');

  expect($route.routes['/'].controller).not.toBe('MusicController');
  expect($route.routes['/'].templateUrl).not.toEqual('templates/music.html');

}));

});

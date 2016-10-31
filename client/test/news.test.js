import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import * as actions from '../scripts/actions/news.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Page actions', () => {

	it('incrementCurrentPage sends a action with type INCREMENT_CURRENTPAGE', () => {
		const expectedAction = {
			type: 'INCREMENT_CURRENTPAGE',
		};
		expect(actions.incrementCurrentPage()).toEqual(expectedAction, 'hej');
	});

	it('decrementCurrentPage sends an action with type DECREMENT_CURRENTPAGE', () => {
		const expectedAction = {
			type: 'DECREMENT_CURRENTPAGE',
		};
		expect(actions.decrementCurrentPage()).toEqual(expectedAction);
	});

	it('changeCurrentPage sends an action with type CHANGE_CURRENTPAGE and page as a number', () => {
		const expectedAction = {
			type: 'CHANGE_CURRENTPAGE',
			page: 14,
		};
		expect(actions.changeCurrentPage(14)).toEqual(expectedAction);
	});

	it('changeYearFilter sends an action with type CHANGE_YEAR_FILTER and a filter year', () => {
		const expectedAction = {
			type: 'CHANGE_YEAR_FILTER',
			filter: 2015,
		};
		expect(actions.changeYearFilter(2015)).toEqual(expectedAction);
	});
});

describe('News actions', () => {
	it('news action sends an action with type NEWS and news with an array of news articels', () => {
		const expectedAction = {
			type: 'NEWS',
			news:
		}
	})
})
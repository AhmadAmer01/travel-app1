import  {getGeonamesData} from '../client/js/app';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      geonames: [{ name: 'Nablus', lat: '32.22', lng: '35.26', countryName: 'Palestine' }]
    })
  })
);

describe('Client API Functions', () => {
  it('should fetch city data from Geonames API', async () => {
    const data = await getGeonamesData('Nablus');
    expect(data.city).toBe('Nablus');
    expect(data.lat).toBe('32.22');
    expect(data.lon).toBe('35.26');
  });
});

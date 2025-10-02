import { test, expect } from '@playwright/test';

test.describe.serial('Reqres API CRUD demo', () => {
  let demoId = '9'; // существующий пользователь для GET/PUT/DELETE

  test('POST /api/users - создать пользователя', async ({ request }) => {
    const userData = { name: 'playwright-user', job: 'tester' };
    const postResp = await request.post('/api/users', { data: userData });
    console.log('POST status:', postResp.status(), await postResp.text());
    expect(postResp.status()).toBe(201);
  });

  test('GET /api/users/2 - получить пользователя', async ({ request }) => {
    const getResp = await request.get(`/api/users/${demoId}`);
    console.log('GET status:', getResp.status(), await getResp.text());
    expect(getResp.status()).toBe(200);
  });

  test('PUT /api/users/2 - обновить пользователя', async ({ request }) => {
    const updateData = { name: 'updated', job: 'automation' };
    const putResp = await request.put(`/api/users/${demoId}`, { data: updateData });
    console.log('PUT status:', putResp.status(), await putResp.text());
    expect(putResp.status()).toBe(200);
  });

  test('DELETE /api/users/2 - удалить пользователя', async ({ request }) => {
    const deleteResp = await request.delete(`/api/users/${demoId}`);
    console.log('DELETE status:', deleteResp.status(), await deleteResp.text());
    expect(deleteResp.status()).toBe(204);
  });
});

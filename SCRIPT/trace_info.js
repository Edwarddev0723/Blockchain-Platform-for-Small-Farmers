// 模擬的記錄資料
const records = [
    { date: '2020-06-10', description: '春季作業' },
    { date: '2020-06-08', description: '夏季' },
    // 添加更多記錄...
  ];
  
  // 渲染時間軸
  records.forEach(record => {
    const item = $('<div>').addClass('timeline-item').text(record.date);
    $('#timeline').append(item);
  });
  
  // 渲染記錄
  records.forEach(record => {
    const item = $('<div>').addClass('record-item').html(`
      <h5>${record.date}</h5>
      <p>${record.description}</p>
    `);
    $('#records').append(item);
  });
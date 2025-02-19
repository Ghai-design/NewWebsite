// الحصول على عدد الزيارات من التخزين المحلي
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

// عرض عدد الزيارات في الصفحة
document.getElementById('visit-count').textContent = visitCount;
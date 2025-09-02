function completePurchase() {
  const method = document.querySelector('input[name="payment"]:checked');
  if (!method) {
    alert("من فضلك اختر وسيلة الدفع");
    return;
  }
  alert("تمت عملية الشراء بنجاح ✅");
}

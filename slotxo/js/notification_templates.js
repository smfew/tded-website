var scenarios = {
    register_bank_recommendation: "register_bank_recommendation",
    wallet_slip_warning: "wallet_slip_warning",
    autoplay_maintenance: "autoplay_maintenance",
	kbank_maintenance: "kbank_maintenance",
	scb_maintenance: "scb_maintenance",
    kbank_unstable: "kbank_unstable",
    scb_unstable: "scb_unstable",
}

function notify(scenario){
    if(!scenario) throw new Error("not defined");

    switch(scenario){
        case scenarios.register_bank_recommendation:
            window.createNotification({
                theme: 'warning',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ไม่แนะนำให้ลูกค้าใช้บัญชี SCB ในการสมัครนะคะ เนื่องจากระบบฝากออโต้ไม่รองรับ',
                message: 'หากมีความจำเป็นต้องใช้ SCB  โอนเรียบร้อยแล้วส่งสลิปให้แอดมินได้เลย เดี๋ยวแอดรีบเติมให้ค่า'
            });
            return;
        case scenarios.wallet_slip_warning:
            window.createNotification({
                theme: 'info',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ลูกค้าที่โอนผ่าน SCB หรือ ทรูวอลเล็ต เครดิตจะไม่เข้าออโต้นะคะ',
                message: 'คลิกที่นี่ เพื่อติดต่อแอดมินพร้อมส่งสลิปได้เลยค่ะ'
            });
            return;
        case scenarios.autoplay_maintenance:
            window.createNotification({
                theme: 'error',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ระบบฝาก-ถอนอัตโนมัติปิดปรับปรุงระบบตั้งแต่เวลา xx.xx - xx.xx',
                message: 'ในช่วงเวลาดังกล่าว ลูกค้าจะไม่สามารถทำรายการฝาก-ถอนผ่านระบบได้'
            });
            return;
        case scenarios.kbank_maintenance:
            window.createNotification({
                theme: 'error',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ธนาคารกสิกรปิดปรับปรุงระบบตั้งแต่เวลา xx.xx - xx.xx',
                message: 'ลูกค้าจะไม่สามารถฝากผ่านบัญชี KBANK ได้'
            });
            return;
        case scenarios.scb_maintenance:
            window.createNotification({
                theme: 'error',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ธนาคารไทยพาณิชย์ปิดปรับปรุงระบบตั้งแต่เวลา xx.xx - xx.xx  ',
                message: 'ลูกค้าจะไม่สามารถฝากผ่านบัญชี SCB ได้ และเนื่องจากแอดมินต้องไล่ถอนมือให้ลูกค้าทีละท่าน อาจเกิดความล่าช้า ต้องขออภัยด้วยค่ะ'
            });
            return;
        case scenarios.kbank_unstable:
            window.createNotification({
                theme: 'warning',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ขณะนี้ระบบธนาคารกสิกรไม่เสถียร อาจเกิดความล่าช้าในการฝาก',
                message: 'หากเกิน 10 นาทีแล้ว เครดิตยังไม่เข้า ส่งสลิปให้แอดมินตรวจสอบได้เลยค่ะ'
            });
            return;
        case scenarios.scb_unstable:
            window.createNotification({
                theme: 'warning',
                showDuration: 0,
                closeOnClick: true,
                displayCloseButton: true,
                positionClass: 'nfc-bottom-left'
            })({
                title: 'ขณะนี้ระบบธนาคารไทยพาณิชย์ไม่เสถียร อาจเกิดความล่าช้าในการฝาก',
                message: 'หากเกิน 10 นาทีแล้ว เครดิตยังไม่เข้า ส่งสลิปให้แอดมินตรวจสอบได้เลยค่ะ  (ทนช่วงสิ้นเดือนหน่อยนะคร้า เงินเดือนออก เจ้ามือหวยเคลียร์ยอดจ้า 555)'
            });
            return;
    }

}

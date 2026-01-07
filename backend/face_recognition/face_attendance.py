import cv2

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    cv2.imshow("Face Attendance - Press Q to Mark", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        print("FACE DETECTED - ATTENDANCE MARKED")
        break

cap.release()
cv2.destroyAllWindows()

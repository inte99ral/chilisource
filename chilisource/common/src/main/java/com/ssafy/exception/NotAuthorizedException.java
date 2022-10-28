package com.ssafy.exception;

public class NotAuthorizedException extends RuntimeException {
    public static final String CREATE_NOT_AUTHORIZED = "생성 권한이 없습니다.";
    public static final String MODIFY_NOT_AUTHORIZED = "변경 권한이 없습니다.";
    public static final String INVITE_NOT_AUTHORIZED = "초대 권한이 없습니다.";
    public static final String FIRE_NOT_AUTHORIZED = "강퇴 권한이 없습니다.";
    public static final String REMOVE_NOT_AUTHORIZED = "삭제 권한이 없습니다.";
    public NotAuthorizedException(String message) {
        super(message);
    }
}

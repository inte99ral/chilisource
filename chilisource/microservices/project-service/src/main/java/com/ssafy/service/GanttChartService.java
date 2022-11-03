package com.ssafy.service;

import com.ssafy.dto.request.GanttChartCreateRequest;
import com.ssafy.dto.request.GanttChartUpdateRequest;
import com.ssafy.dto.response.GanttChartResponse;

import java.util.List;

public interface GanttChartService {
    // 프로젝트 내 최신 버전 전체 간트차트 조회
    List<GanttChartResponse> getProjectGanttChartAllLatest(Long projectId);

    // 프로젝트 내 최신 버전 개별/공통 간트차트 조회
    List<GanttChartResponse> getProjectGanttChartEachLatest(Long userId, Long projectId);

    // 프로젝트 내 버전 별 전체 간트차트 조회
    List<GanttChartResponse> getProjectGanttChartByVersion(Long projectId, Long version);

    // 프로젝트 내 버전 별 개별/공통 간트차트 조회
    List<GanttChartResponse> getProjectGanttChartByVersionEach(Long userId, Long projectId, Long version);

    // 간트차트 내용 추가
    void createGanttChart(Long userId, GanttChartCreateRequest request);

    // 간트차트 내용 수정
    void updateGanttChart(Long userId, GanttChartUpdateRequest request);

    // 간트차트 내용 삭제
    void deleteGanttChart(Long userId, Long ganttChartId);
}
